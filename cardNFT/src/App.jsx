import { ReactComponent as EthereumIcon } from './assets/img/icon-ethereum.svg';
import { ReactComponent as ClockIcon } from './assets/img/icon-clock.svg';
import { ReactComponent as ViewIcon } from './assets/img/icon-view.svg';
import { ReactComponent as Avatar } from './assets/img/image-avatar.png';
import EquilibriumImage from './assets/img/image-equilibrium.jpg'; // Importation de l'image

function App() {
  return (
    <div className="nft-container">
      <div className="nft-card">
        {/* NFT Image avec overlay */}
        <div className="nft-image-wrapper">
          <img
            src={EquilibriumImage}
            alt="Equilibrium #3429"
            className="nft-image"
          />
          <div className="image-overlay">
            <img
              src={ViewIcon}
              alt="Equilibrium #3429"
              className="view-icon"
            />
          </div>
        </div>
        {/* NFT Details */}
        <div className="nft-content">
          <h2 className="nft-title">Equilibrium #3429</h2>
          <p className="nft-description">
            Our Equilibrium collection promotes balance and calm.
          </p>
          {/* Price and Time */}
          <div className="nft-stats">
            <div className="eth-price">
              <img
                src={EthereumIcon}
                alt="Equilibrium #3429"
                className="ethereum-icon"
              />
              <span>0.041 ETH</span>
            </div>
            <div className="time-left">
              <img
                src={ClockIcon}
                alt="Equilibrium #3429"
                className="clock-icon"
              />
              <span>3 days left</span>
            </div>
          </div>
          {/* Creator */}
          <div className="creator-section">
            <div className="avatar">
              <img
                src={Avatar}
                alt="Creator avatar"
              />
            </div>
            <p className="creator-text">
              Creation of <span className="creator-name">Jules Wyvern</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
