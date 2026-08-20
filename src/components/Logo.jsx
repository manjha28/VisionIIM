import { asset } from '../config/siteConfig';

export default function Logo({ size = 40, showWord = true, wordSize = 28, white = true }) {
  return (
    <span
      className={white ? 'logo logo--white' : 'logo'}
      style={{ '--word': `${wordSize}px` }}
    >
      <img
        className="logo__mark"
        src={asset('logo.png')}
        alt=""
        style={{ width: size, height: size }}
      />
      {showWord && <b>VisionIIM</b>}
    </span>
  );
}