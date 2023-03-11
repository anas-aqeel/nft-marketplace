import { Switch } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ToogleButton({ onClick, enabled }) {
  return (
    <Switch
      checked={enabled}
      onChange={onClick}
      className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none "
    >
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? 'bg-[#cb0753]' : 'bg-gray-200',
          'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors ease-in-out duration-1000 focus:outline-none',
        )}
      />
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0 bg-[#0029ff]',
          'shadow-lg pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full bg-white ring-0 transition-transform duration-300 ease-in-out',
        )}
      />
    </Switch>
  );
}