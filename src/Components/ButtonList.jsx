import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "Valentines",
  ];
  return (
    <div className="flex gap-4 mt-3 mb-6">
      {list.map((li) => (
        <Button key={li} name={li} />
      ))}
    </div>
  );
};

export default ButtonList;
