import { tw } from 'twind';

interface IButton {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
}

const Button = ({ primary, modifier, children, ...rest }: IButton) => {
  const baseStyle = `font-sans font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 active:scale-95`;
  const styles = primary
    ? `bg-brand-600 text-white border-transparent hover:bg-brand-500 hover:shadow-xl`
    : `bg-transparent text-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-white`;

  return (
    <button type="button" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
