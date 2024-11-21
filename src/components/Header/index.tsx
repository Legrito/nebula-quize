import BackButton from './BackButton';
import NebulaLogo from './NebulaLogo';

export default function Header() {
  return (
    <header className="width-[100vw] flex justify-center align-middle py-[10px] lg:py-[15px] px-[20px] lg:px-[165px] relative">
      <div className="flex justify-center align-middle absolute top-[10px] lg:top-[15px] left-[20px] lg:left-[165px]">
        <BackButton />
      </div>
      <NebulaLogo />
    </header>
  );
}
