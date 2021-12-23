interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text?: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  objA?: {
    f1: string;
    f2: number;
  };
  person?: Person;
}

export const TextField: React.FC<Props> = () => {
  return (
    <div>
      <input />
    </div>
  );
};
