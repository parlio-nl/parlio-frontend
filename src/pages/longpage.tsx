export default function Longpage(): JSX.Element {
  return (
    <>
      {Array.from({ length: 40 }).map((_, i) => {
        return (
          <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            dolore facilis fuga magnam, numquam quasi quos. Accusamus, deleniti,
            dolorem esse iure libero nam quas quis reiciendis reprehenderit
            sapiente veritatis vero!
          </p>
        );
      })}
    </>
  );
}
