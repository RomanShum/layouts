function IconSwitch(props) {
  const { icon, onSwitch } = props;
  return (
    <div>
      <span className="material-icons" onClick={onSwitch}>
        {icon}
      </span>
    </div>
  );
}

export default IconSwitch;
