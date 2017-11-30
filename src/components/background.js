import Vue from 'vue';
import { Scene, PerspectiveCamera, WebGLRenderer, LineBasicMaterial, Vector3, Geometry, Line, FogExp2, Euler } from 'three';

const colors = ['#E0D4BC', '#05C4B4', '#FF9D00', '#AF5CC6', '#45D2EF', '#CC3F3F'];

export const TlBackground = Vue.component('tlBackground', {
  template: `<div></div>`,

  mounted() {

    let position = 0;

    window.addEventListener('scroll', function() {
      position = window.pageYOffset;
    });

    window.addEventListener('resize', function() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    });

    let scene = new Scene();
    scene.fog = new FogExp2( 0xffffff, 0.006 );


    let camera = new PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 0, 100);
    // camera.lookAt(new Vector3(0, 0, 0));

    let renderer = new WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize( window.innerWidth, window.innerHeight );
    this.$el.appendChild( renderer.domElement );

    generateVertices(scene);

    function animate() {
      requestAnimationFrame( animate );
      camera.position.y = -(position / 100);
      // camera.position.y = camera.position.y-.05;
      // camera.position.z = camera.position.z-.05;
      camera.rotateZ(.0003);
      scene.rotateX(.0001);
      renderer.render( scene, camera );
    }
    animate();
  }
});


function generateVertices(scene) {
  let range = 100;
  let quads = [
    { x: -range, y: -range },
    { x: 0, y: -range },
    { x: -range, y: 0 },
    { x: range, y: range },
  ];
  // quads = shuffle(quads);
  let lines = Array.from({length: randomNumber(50, 100)}, () => 0);

  lines.forEach(() => {
    let material = new LineBasicMaterial({ color: colors[randomNumber(0, colors.length-1)] });
    let geometry = new Geometry();
    quads.forEach(q => {
      geometry.vertices.push(new Vector3(
          randomNumber(q.x, q.x + range),
          randomNumber(q.y, q.y + range),
          randomNumber(-200, 200)
      ));
    });
    scene.add(new Line(geometry, material));
  });

  function randomNumber(min, max) {
    let testMin = min+range;
    let testMax = max+range;
    let test = Math.floor(Math.random()*(testMax-testMin+1)+testMin);
    return test - range;
  }
}

function shuffle(array) {
  let copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(array.splice(i, 1)[0]);
  }

  return copy;
}