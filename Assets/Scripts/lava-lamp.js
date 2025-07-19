const canvas = document.getElementById('lava-canvas');
let isRendering = true;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, (window.innerwidth*0.51));

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, -1000, 1000);
camera.position.z = 2;

const vertexShader = `
varying vec2 vUv;
uniform float time;
uniform vec4 resolution;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}
`;
const fragmentShader = `
precision highp float;
varying vec2 vUv;
uniform float time;
uniform vec4 resolution;

float PI = 3.141592653589793238;

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    return mat4(
        oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
        oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
        oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
        0.0,                                0.0,                                0.0,                                1.0
    );
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
    mat4 m = rotationMatrix(axis, angle);
    return (m * vec4(v, 1.0)).xyz;
}

float smin( float a, float b, float k ) {
    k *= 6.0;
    float h = max( k-abs(a-b), 0.0 )/k;
    return min(a,b) - h*h*h*k*(1.0/6.0);
}

float sphereSDF(vec3 p, float r) {
    return length(p) - r;
}

float sdf(vec3 p) {
    vec3 p1 = rotate(p, vec3(0.0, 0.0,0.0), time/5.0);
    vec3 p2 = rotate(p, vec3(1.), -time/5.0);
    vec3 p3 = rotate(p, vec3(1., 1., 0.), -time/4.5);
    vec3 p4 = rotate(p, vec3(0., 1., 0.), -time/4.0);

    float final = sphereSDF(p1 - vec3(-0.5, 0.0, 0.0), 0.25);
    float nextSphere = sphereSDF(p2 - vec3(0.55, 0.0, 0.0), 0.3);
    final = smin(final, nextSphere, 0.1);
    nextSphere = sphereSDF(p2 - vec3(-0.8, 0.0, 0.0), 0.2);
    final = smin(final, nextSphere, 0.1);
    nextSphere = sphereSDF(p3 - vec3(1.0, 0.0, 0.0), 0.15);
    final = smin(final, nextSphere, 0.1);
    nextSphere = sphereSDF(p4 - vec3(0.45, -0.45, 0.0), 0.15);
    final = smin(final, nextSphere, 0.1);

        nextSphere = sphereSDF(p3 - vec3(-0.3, 0.5, 0.0), 0.18);
    final = smin(final, nextSphere, 0.1);



    return final;
}

vec3 getNormal(vec3 p) {
    float d = 0.001;
    return normalize(vec3(
        sdf(p + vec3(d, 0.0, 0.0)) - sdf(p - vec3(d, 0.0, 0.0)),
        sdf(p + vec3(0.0, d, 0.0)) - sdf(p - vec3(0.0, d, 0.0)),
        sdf(p + vec3(0.0, 0.0, d)) - sdf(p - vec3(0.0, 0.0, d))
    ));
}

float rayMarch(vec3 rayOrigin, vec3 ray) {
    float t = 0.0;
    for (int i = 0; i < 100; i++) {
        vec3 p = rayOrigin + ray * t;
        float d = sdf(p);
        if (d < 0.001) return t;
        t += d;
        if (t > 100.0) break;
    }
    return -1.0;
}

void main() {
    vec2 newUV = (vUv - vec2(0.5)) * resolution.zw + vec2(0.5);
    vec3 cameraPos = vec3(0.0, 0.0, 5.0);
    vec3 ray = normalize(vec3((vUv - vec2(0.5)) * resolution.zw, -1));

    float t = rayMarch(cameraPos, ray);
    if (t > 0.0) {
        vec3 p = cameraPos + ray * t;
        vec3 normal = getNormal(p);
        float fresnel = pow(1.0 + dot(ray, normal),2.0);

        vec3 baseColor = vec3(0.439, 0.564, 1.0);
        vec3 minColor = vec3(0.047); // #0c0c0c
        vec3 finalColor = mix(minColor, baseColor, fresnel);

        gl_FragColor = vec4(finalColor, 1.0);
    } else {
        gl_FragColor = vec4(0.047,0.047,0.047, 1.0);
    }
}
`;
const uniforms = {
  time: { value: 0 },
  resolution: { value: new THREE.Vector4() }
};

const geometry = new THREE.PlaneGeometry(5, 5);
const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms,
  transparent: true,     
  depthWrite: false,       
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Set resolution
function updateResolution() {
  const width = window.innerWidth;
  const height = window.innerWidth*0.51;
  const imageAspect = 1;
  let a1, a2;
  
  if (height / width > imageAspect) {
    a1 = (width / height) * imageAspect;
    a2 = 1;
  } else {
    a1 = 1;
    a2 = (height / width) / imageAspect;
  }

  uniforms.resolution.value.set(width, height, a1, a2);
  renderer.setSize(width, height);
}
var observed = true;
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    isRendering = false;
  } else if(observed) {
    isRendering = true;
    animate();
  }
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!isRendering) {
        isRendering = true;
        observed = true;
        animate();  // resume animation loop
      }
    } else {
      observed = false;
      isRendering = false;  // stop animation loop
    }
  });
}, { threshold: 0.1 });
window.addEventListener('resize', updateResolution);
updateResolution();

// Animate
const clock = new THREE.Clock();
const renderAnchor = document.getElementById('stop-render-anchor');
console.log(renderAnchor);
observer.observe(renderAnchor); // NOT canvas
// Media query to disable animation on touch/coarse pointers or small screens


function animate() {
  if (mediaQuery.matches) {
    isRendering = false;
    return;  // don't animate if media query matches
  }
  if (!isRendering) return;
  requestAnimationFrame(animate);
  uniforms.time.value = clock.getElapsedTime();
  renderer.render(scene, camera);
}

// Start animation only if media query does not match
if (!mediaQuery.matches) {
  animate();
}

// Listen to media query changes to start/stop animation dynamically
mediaQuery.addEventListener('change', (e) => {
  if (e.matches) {
    // Stop animation
    isRendering = false;
  } else {
    // Start animation if not already running
    if (!isRendering) {
      isRendering = true;
      
      animate();
    }
  }
});


