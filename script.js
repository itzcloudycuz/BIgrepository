// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Neon Grid Background
const gridSize = 100; // Size of the grid
const divisions = 50; // Number of divisions in the grid
const gridMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });

// Bottom grids
const ground1 = new THREE.Mesh(new THREE.PlaneGeometry(gridSize, gridSize, divisions, divisions), gridMaterial);
ground1.rotation.x = -Math.PI / 2;
ground1.position.z = 0;
scene.add(ground1);

const ground2 = new THREE.Mesh(new THREE.PlaneGeometry(gridSize, gridSize, divisions, divisions), gridMaterial);
ground2.rotation.x = -Math.PI / 2;
ground2.position.z = -gridSize;
scene.add(ground2);

const ground3 = new THREE.Mesh(new THREE.PlaneGeometry(gridSize, gridSize, divisions, divisions), gridMaterial);
ground3.rotation.x = -Math.PI / 2;
ground3.position.z = -2 * gridSize;
scene.add(ground3);

const ground4 = new THREE.Mesh(new THREE.PlaneGeometry(gridSize, gridSize, divisions, divisions), gridMaterial);
ground4.rotation.x = -Math.PI / 2;
ground4.position.z = -3 * gridSize;
scene.add(ground4);

// Left grids
const leftGrid1 = new THREE.Mesh(new THREE.PlaneGeometry(gridSize, gridSize, divisions, divisions), gridMaterial);
leftGrid1.rotation.x = -Math.PI / 2;
leftGrid1.rotation.y = Math.PI / 2;
leftGrid1.position.set(-gridSize / 2, gridSize / 2, 0);
scene.add(leftGrid1);

const leftGrid2 = new THREE.Mesh(new THREE.PlaneGeometry(gridSize, gridSize, divisions, divisions), gridMaterial);
leftGrid2.rotation.x = -Math.PI / 2;
leftGrid2.rotation.y = Math.PI / 2;
leftGrid2.position.set(-gridSize / 2, gridSize / 2, -gridSize);
scene.add(leftGrid2);

const leftGrid3 = new THREE.Mesh(new THREE.PlaneGeometry(gridSize, gridSize, divisions, divisions), gridMaterial);
leftGrid3.rotation.x = -Math.PI / 2;
leftGrid3.rotation.y = Math.PI / 2;
leftGrid3.position.set(-gridSize / 2, gridSize / 2, -2 * gridSize);
scene.add(leftGrid3);

const leftGrid4 = new THREE.Mesh(new THREE.PlaneGeometry(gridSize, gridSize, divisions, divisions), gridMaterial);
leftGrid4.rotation.x = -Math.PI / 2;
leftGrid4.rotation.y = Math.PI / 2;
leftGrid4.position.set(-gridSize / 2, gridSize / 2, -3 * gridSize);
scene.add(leftGrid4);

// Right grids
const rightGrid1 = new THREE.Mesh(new THREE.PlaneGeometry(gridSize, gridSize, divisions, divisions), gridMaterial);
rightGrid1.rotation.x = -Math.PI / 2;
rightGrid1.rotation.y = -Math.PI / 2;
rightGrid1.position.set(gridSize / 2, gridSize / 2, 0);
scene.add(rightGrid1);

const rightGrid2 = new THREE.Mesh(new THREE.PlaneGeometry(gridSize, gridSize, divisions, divisions), gridMaterial);
rightGrid2.rotation.x = -Math.PI / 2;
rightGrid2.rotation.y = -Math.PI / 2;
rightGrid2.position.set(gridSize / 2, gridSize / 2, -gridSize);
scene.add(rightGrid2);

const rightGrid3 = new THREE.Mesh(new THREE.PlaneGeometry(gridSize, gridSize, divisions, divisions), gridMaterial);
rightGrid3.rotation.x = -Math.PI / 2;
rightGrid3.rotation.y = -Math.PI / 2;
rightGrid3.position.set(gridSize / 2, gridSize / 2, -2 * gridSize);
scene.add(rightGrid3);

const rightGrid4 = new THREE.Mesh(new THREE.PlaneGeometry(gridSize, gridSize, divisions, divisions), gridMaterial);
rightGrid4.rotation.x = -Math.PI / 2;
rightGrid4.rotation.y = -Math.PI / 2;
rightGrid4.position.set(gridSize / 2, gridSize / 2, -3 * gridSize);
scene.add(rightGrid4);

// Load the GLB model and apply a neon wireframe material
const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load('https://cdn.devdojo.com/assets/3d/parrot.glb', function(gltf) {
    const model = gltf.scene;
    model.traverse(function(child) {
        if (child.isMesh) {
            child.material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
        }
    });
    model.scale.set(0.2, 0.2, 0.2); // Scale the model as needed
    model.position.set(0, 6, 0); // Position the model in the scene
    scene.add(model);
}, undefined, function(error) {
    console.error('An error occurred while loading the model:', error);
});

// Light to illuminate the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

// Camera Position
camera.position.z = 15;
camera.position.y = 5;
camera.lookAt(0, 5, 0);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Move the bottom grids to create a seamless scrolling effect
    ground1.position.z += 0.1;
    ground2.position.z += 0.1;
    ground3.position.z += 0.1;
    ground4.position.z += 0.1;

    if (ground1.position.z >= gridSize) {
        ground1.position.z = -3 * gridSize;
    }
    if (ground2.position.z >= gridSize) {
        ground2.position.z = -3 * gridSize;
    }
    if (ground3.position.z >= gridSize) {
        ground3.position.z = -3 * gridSize;
    }
    if (ground4.position.z >= gridSize) {
        ground4.position.z = -3 * gridSize;
    }

    // Move the left grids to create a seamless scrolling effect
    leftGrid1.position.z += 0.1;
    leftGrid2.position.z += 0.1;
    leftGrid3.position.z += 0.1;
    leftGrid4.position.z += 0.1;

    if (leftGrid1.position.z >= gridSize) {
        leftGrid1.position.z = -3 * gridSize;
    }
    if (leftGrid2.position.z >= gridSize) {
        leftGrid2.position.z = -3 * gridSize;
    }
    if (leftGrid3.position.z >= gridSize) {
        leftGrid3.position.z = -3 * gridSize;
    }
    if (leftGrid4.position.z >= gridSize) {
        leftGrid4.position.z = -3 * gridSize;
    }

    // Move the right grids to create a seamless scrolling effect
    rightGrid1.position.z += 0.1;
    rightGrid2.position.z += 0.1;
    rightGrid3.position.z += 0.1;
    rightGrid4.position.z += 0.1;

    if (rightGrid1.position.z >= gridSize) {
        rightGrid1.position.z = -3 * gridSize;
    }
    if (rightGrid2.position.z >= gridSize) {
        rightGrid2.position.z = -3 * gridSize;
    }
    if (rightGrid3.position.z >= gridSize) {
        rightGrid3.position.z = -3 * gridSize;
    }
    if (rightGrid4.position.z >= gridSize) {
        rightGrid4.position.z = -3 * gridSize;
    }

    renderer.render(scene, camera);
}
animate();

// Handle Window Resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
