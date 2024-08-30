import React from 'react';

type ControlPanelProps = {
  name: 'string';
  onChange: (e: React.ChangeEvent<HTMLInputElement>, param1: string) => void;
};

const ControlPanel = ({ name, onChange }: ControlPanelProps): JSX.Element => {
  return (
    <form
      className="bg-primary-10 flex flex-row gap-4 text-white"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <label className="font-bold">Your Name</label>
        <input
          name="name"
          className="w-full"
          type="text"
          value={name}
          onChange={(e) => onChange(e, 'new Prop')}
        />
      </div>
    </form>
  );
};

export default ControlPanel;
