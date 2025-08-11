type VideoComponentProps = {
  poster?: string;
  src1?: string;
  src2?: string;
  rightval?: string;
  leftval?: string;
  topval?: string;
  bottomVal?: string;
  widthval?: string;
  heightval?: string;
};

export default function VideoComponent({
  poster,
  src1,
  src2,
  topval,
  bottomVal,
  rightval,
  leftval,
  widthval,
  heightval,
}: VideoComponentProps) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      style={{
        top: topval,
        bottom: bottomVal,
        right: rightval,
        left: leftval,
        width: widthval,
        height: heightval,
      }}
      className="floating    z-10 absolute"
    >
      <source src={src1} type='video/mp4; codecs="hvc1"' />
      <source src={src2} type="video/webm" />
    </video>
  );
}
