import KeyboardKey from "./KeyboardKey";

const rows = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

export default function Keyboard({ activeKey }) {
  return (
    <div className="space-y-2">
      {rows.map((row, index) => (
        <div key={index} className="mx-auto flex max-w-4xl gap-1.5 sm:gap-2">
          {row.map((key) => (
            <KeyboardKey key={key} value={key} active={activeKey === key} />
          ))}
        </div>
      ))}

      <div className="mx-auto flex max-w-4xl justify-center pt-1">
        <KeyboardKey value="SPACE" wide active={activeKey === " "} />
      </div>
    </div>
  );
}
