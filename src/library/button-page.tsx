import { Button } from "../common/button/button";

export const ButtonPage = () => {
  return (
    <div class="mb-4">
      <h2>Buttons</h2>
      <p>This is a test</p>
      <div class="mb-2">
        <div>size</div>
        <div class="flex items-center gap-2">
          <Button
            size="sm"
            iconRight="caret-down-solid"
            iconLeft="arrow-left-regular"
          >
            Medium
          </Button>
          <Button
            size="md"
            iconRight="caret-down-solid"
            iconLeft="arrow-left-regular"
          >
            Medium
          </Button>
          <Button
            size="lg"
            iconRight="caret-down-solid"
            iconLeft="arrow-left-regular"
          >
            Medium
          </Button>
        </div>
      </div>
      <div class="mb-2">
        <div>variants</div>
        <div class="flex gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary-color">Secondary Color</Button>
          <Button variant="border">Border</Button>
          <Button variant="tertiary">Tertiary</Button>
        </div>
      </div>
      <div class="mb-2">
        <div>icons</div>
        <div class="flex items-center gap-2">
          <Button iconLeft="arrow-left-regular">iconLeft</Button>
          <Button iconRight="caret-down-solid">iconRight</Button>
        </div>
      </div>
      <div class="mb-2">
        <div>icons prop passthrough</div>
        <div class="flex gap-2">
          <Button
            iconLeft={{
              name: "face-awesome-regular",
              class: "text-warning-500 rotate-[45deg]",
            }}
          >
            iconLeftProps
          </Button>
          <Button
            iconRight={{
              name: "caret-down-solid",
              class: "rotate-[155deg] fill-primary-500",
            }}
          >
            iconRightProps
          </Button>
        </div>
      </div>
      <div class="mb-2">
        <div>iconOnly</div>
        <div class="flex gap-2">
          <Button iconOnly="face-awesome-regular" size="sm" />
          <Button iconOnly="face-awesome-regular" size="md" />
          <Button iconOnly="face-awesome-regular" size="lg" />
        </div>
      </div>
      <div class="mb-2">
        <div>block</div>
        <Button block>block</Button>
      </div>
    </div>
  );
};
