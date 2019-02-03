import React, {Component} from 'react';
import * as THREE from 'three';

class App extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.cube = undefined;

    this.animate = this.animate.bind(this);
    this.setup = this.setup.bind(this);
  }

  componentDidMount() {
    this.setup();
    this.animate();
  }

  setup() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.myRef.current.appendChild(this.renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.camera.position.z = 5;
  }

  animate() {
    requestAnimationFrame(this.animate);

    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div ref={this.myRef}>
      </div>
    );
  }
}

export default App;
