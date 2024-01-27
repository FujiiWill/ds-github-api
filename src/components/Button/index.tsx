import "./styles.css";

type Props = {
  name: string;
};

export default function Button({ name }: Props) {
  return <button type="submit">{name}</button>;
}
