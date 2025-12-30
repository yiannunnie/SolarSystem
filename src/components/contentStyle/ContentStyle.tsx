interface ContentStyleProps {
  title: string;
  content: string | string[];
}

export const ContentStyle = ({ title, content }: ContentStyleProps) => {
  const contentArray = Array.isArray(content) ? content : [content];

  return (
    <>
      <h2 className="h2space">{title}</h2>
      {contentArray.map((text, i) => (
        <p className="pspace" key={i}>
          {text}
        </p>
      ))}
    </>
  );
}
