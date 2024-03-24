import { RangeSlider } from "@stem/components";
import { createSignal } from "solid-js";

export const RangeSliderPage = () => {
  const [value, setValue] = createSignal(25);
  const [value1, setValue1] = createSignal(1);
  const [value2, setValue2] = createSignal(56);
  return (
    <div>
      <h1>Progress Bar</h1>
      <div class="mb-8">
        <div class="mb-4">
          <h3>sm</h3>
          <RangeSlider value={25} size="sm" />
        </div>
        <div class="mb-4">
          <h3>md</h3>
          <RangeSlider value={50} size="md" />
        </div>
        <div class="mb-4">
          <h3>lg</h3>
          <RangeSlider value={75} size="lg" />
        </div>
      </div>

      <div>
        <h3>Connecting state</h3>
        <RangeSlider value={value()} onChange={setValue} />
        {value()}
      </div>

      <div>
        <h3>Min/Max</h3>
        <RangeSlider
          value={value1()}
          onChange={(v) => {
            setValue1(v);
          }}
          min={1}
          max={3}
          snap
        />
        {value1()}
        <button onClick={() => setValue1(1)}>hey</button>
      </div>

      <div>
        <RangeSlider
          value={value2()}
          onChange={setValue2}
          min={0}
          max={100}
          snap
        />
        {value2()}
      </div>
    </div>
  );
};
