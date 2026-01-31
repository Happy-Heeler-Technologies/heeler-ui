import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";
import { Button } from "../Button/Button";
import { Check, Cancel, Bell } from "../../icons";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    maxWidth: {
      control: "select",
      options: ["max-w-sm", "max-w-md", "max-w-lg", "max-w-xl", "max-w-2xl"],
    },
    showCloseButton: {
      control: "boolean",
    },
    header: { control: false },
    children: { control: false },
    footer: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button
          text="Open Dialog"
          backgroundColor="bg-blue-600"
          onClick={() => setOpen(true)}
        />
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          header={
            <h2 className="text-xl font-semibold text-gray-900">
              Dialog Title
            </h2>
          }
          footer={
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                borderColor="border-gray-300"
                text="Cancel"
                size="standard"
                onClick={() => setOpen(false)}
              />
              <Button
                backgroundColor="bg-blue-600"
                text="Confirm"
                size="standard"
                onClick={() => setOpen(false)}
              />
            </div>
          }
        >
          <p className="text-gray-600">
            This is a dialog with composable header, body, and footer sections.
            The content is fully customizable.
          </p>
        </Dialog>
      </>
    );
  },
};

export const WithIcon: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button
          text="Open Dialog"
          backgroundColor="bg-emerald-600"
          onClick={() => setOpen(true)}
        />
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          header={
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600">
                <Check width={20} height={20} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Success</h2>
            </div>
          }
          footer={
            <div className="flex justify-end">
              <Button
                backgroundColor="bg-emerald-600"
                text="Continue"
                size="standard"
                onClick={() => setOpen(false)}
              />
            </div>
          }
        >
          <p className="text-gray-600">
            Your changes have been saved successfully. You can now continue
            working.
          </p>
        </Dialog>
      </>
    );
  },
};

export const Confirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button
          text="Delete Item"
          backgroundColor="bg-red-600"
          onClick={() => setOpen(true)}
        />
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          header={
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600">
                <Cancel width={20} height={20} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                Delete Item
              </h2>
            </div>
          }
          footer={
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                borderColor="border-gray-300"
                text="Cancel"
                size="standard"
                onClick={() => setOpen(false)}
              />
              <Button
                backgroundColor="bg-red-600"
                text="Delete"
                size="standard"
                onClick={() => setOpen(false)}
              />
            </div>
          }
        >
          <p className="text-gray-600">
            Are you sure you want to delete this item? This action cannot be
            undone.
          </p>
        </Dialog>
      </>
    );
  },
};

export const NoCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button
          text="Open Dialog"
          backgroundColor="bg-violet-600"
          onClick={() => setOpen(true)}
        />
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          showCloseButton={false}
          header={
            <h2 className="text-xl font-semibold text-gray-900">
              Required Action
            </h2>
          }
          footer={
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                borderColor="border-gray-300"
                text="Decline"
                size="standard"
                onClick={() => setOpen(false)}
              />
              <Button
                backgroundColor="bg-violet-600"
                text="Accept"
                size="standard"
                onClick={() => setOpen(false)}
              />
            </div>
          }
        >
          <p className="text-gray-600">
            Please review and accept the terms to continue. This dialog does not
            have an X button.
          </p>
        </Dialog>
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [openSize, setOpenSize] = useState<string | null>(null);

    return (
      <div className="flex gap-3">
        {["max-w-sm", "max-w-md", "max-w-lg", "max-w-xl"].map((size) => (
          <div key={size}>
            <Button
              text={size}
              backgroundColor="bg-gray-700"
              size="small"
              onClick={() => setOpenSize(size)}
            />
            <Dialog
              open={openSize === size}
              onClose={() => setOpenSize(null)}
              maxWidth={size}
              header={
                <h2 className="text-xl font-semibold text-gray-900">{size}</h2>
              }
              footer={
                <div className="flex justify-end">
                  <Button
                    backgroundColor="bg-gray-700"
                    text="Close"
                    size="standard"
                    onClick={() => setOpenSize(null)}
                  />
                </div>
              }
            >
              <p className="text-gray-600">
                This dialog uses {size} as its maximum width constraint.
              </p>
            </Dialog>
          </div>
        ))}
      </div>
    );
  },
};

export const LongContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button
          text="Open Dialog"
          backgroundColor="bg-blue-600"
          onClick={() => setOpen(true)}
        />
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          maxWidth="max-w-xl"
          header={
            <h2 className="text-xl font-semibold text-gray-900">
              Terms of Service
            </h2>
          }
          footer={
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                borderColor="border-gray-300"
                text="Decline"
                size="standard"
                onClick={() => setOpen(false)}
              />
              <Button
                backgroundColor="bg-blue-600"
                text="Accept"
                size="standard"
                onClick={() => setOpen(false)}
              />
            </div>
          }
        >
          <div className="space-y-4 text-gray-600 max-h-64 overflow-y-auto pr-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
          </div>
        </Dialog>
      </>
    );
  },
};

export const CustomBackground: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button
          text="Open Dialog"
          backgroundColor="bg-gray-900"
          onClick={() => setOpen(true)}
        />
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          backgroundColor="bg-gray-900"
          header={
            <h2 className="text-xl font-semibold text-white">Dark Dialog</h2>
          }
          footer={
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                borderColor="border-gray-600"
                textColor="text-gray-300"
                text="Cancel"
                size="standard"
                onClick={() => setOpen(false)}
              />
              <Button
                backgroundColor="bg-white"
                textColor="text-gray-900"
                text="Confirm"
                size="standard"
                onClick={() => setOpen(false)}
              />
            </div>
          }
        >
          <p className="text-gray-300">
            This dialog uses a custom dark background color.
          </p>
        </Dialog>
      </>
    );
  },
};

export const Notification: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button
          text="Show Notification"
          backgroundColor="bg-amber-500"
          textColor="text-gray-900"
          onClick={() => setOpen(true)}
        />
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          maxWidth="max-w-sm"
          header={
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600">
                <Bell width={20} height={20} />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">
                New Notification
              </h2>
            </div>
          }
          footer={
            <div className="flex justify-end">
              <Button
                backgroundColor="bg-amber-500"
                textColor="text-gray-900"
                text="Dismiss"
                size="standard"
                onClick={() => setOpen(false)}
              />
            </div>
          }
        >
          <p className="text-gray-600 text-sm">
            You have 3 new messages waiting for you.
          </p>
        </Dialog>
      </>
    );
  },
};
