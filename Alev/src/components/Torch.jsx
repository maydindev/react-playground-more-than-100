export default function Torch({ torchEquipped }) {
  return (
      <div className="inner-torch-container">
        <img src="./images/torch.png" />
        <div className={`torch-flame ${torchEquipped ? "vibrate" : "vibrate-less"}`}>🔥</div>
      </div>
  );
}
