import './Loader.scss';

const Loader = () => {
  return (
    <div className="Loader">
      <span className="Loader__Spinner" />
      <br />
      <p className="Loader__Text">Chargement...</p>
    </div>
  );
};

export default Loader;
