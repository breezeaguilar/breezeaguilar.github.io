import FaultyTerminal from './FaultyTerminal';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <FaultyTerminal
        scale={1.5}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={0.5}
        pause={false}
        scanlineIntensity={0.5}
        glitchAmount={1}
        flickerAmount={1}
        noiseAmp={1}
        chromaticAberration={0}
        dither={0}
        curvature={0.1}
        tint="#EC4899"
        mouseReact
        mouseStrength={0.5}
        pageLoadAnimation
        brightness={0.6}
      />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#e894be',
        textAlign: 'center',
        pointerEvents: 'none',
      }}>
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'impact', opacity: 0.7 }}>breeze aguilar</h1>
        <p style={{ fontSize: '2rem', fontFamily: 'impact', opacity: 0.7 }}>site under construction... see u soon!&lt;3</p>
      </div>
    </div>
  );
}

export default App;