import { MAX_INTEGER } from "../const";
import { numberTestData } from "./data/number";
import { textTestData } from "./data/text";
import { WizData } from "../WizData";

numberTestData.forEach((d, i) => {
  test("numberTestData: number to wizData object test:" + i, () => {
    const wizData: WizData = WizData.fromBin(d.binValue);

    expect(wizData.input).toBe(d.binValue);

    expect(wizData.bytes.length).toBe(d.byteLength);
    expect(wizData.bin.length / 8).toBe(d.byteLength);
    expect(wizData.hex.length / 2).toBe(d.byteLength);

    expect(wizData.bin).toBe(d.binValue);
    expect(wizData.hex).toBe(d.hexValue);

    if (-MAX_INTEGER <= d.inputNumber && d.inputNumber <= MAX_INTEGER) {
      expect(d.numberValue).toBe(true);
      expect(wizData.number).toBe(d.inputNumber);
    } else {
      expect(d.numberValue).toBe(false);
      expect(wizData.number).toBe(undefined);
    }

    expect(wizData.text).toBe(undefined);
  });
});

textTestData.forEach((d, i) => {
  test("textTestData: number to wizData object test:" + i, () => {
    const wizData: WizData = WizData.fromBin(d.binValue);

    expect(wizData.input).toBe(d.binValue);

    expect(wizData.bytes.length).toBe(d.byteLength);
    expect(wizData.bin.length / 8).toBe(d.byteLength);
    expect(wizData.hex.length / 2).toBe(d.byteLength);

    expect(wizData.bin).toBe(d.binValue);
    expect(wizData.hex).toBe(d.hexValue);
    expect(wizData.number).toBe(d.numberValue);
    expect(wizData.text).toBe(undefined);
  });
});
