interface Props {
  style: {};
  link: string;
  title: string;
  icon: string;
}

export default function PreviewItem(props: Props) {
  return (
    <div className="preview-item" style={props.style}>
      <img src={props.icon} alt="link" />
      <p className="body-s">{props.title}</p>
      <img src="/assets/images/icon-arrow-right.svg" alt="button" />
    </div>
  );
}
