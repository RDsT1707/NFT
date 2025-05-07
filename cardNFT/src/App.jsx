import './App.css';

function App() {
  return (
    <div className="nft-container">
      <div className="nft-card">
        {/* NFT Image avec overlay */}
        <div className="nft-image-wrapper">
          <img
            src="/src/assets/img/image-equilibrium.jpg"
            alt="Equilibrium #3429"
            className="nft-image"
          />
          <div className="image-overlay">
            <img
              src="/src/assets/img/icon-view.svg"
              alt="Equilibrium #3429"
              className="view-icon"
            />
          </div>
        </div>
        {/* NFT Details */}
      </div>
    </div>
  );
}

export default App;
