import React from 'react';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};
const sizeMap = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2', lg: 'px-5 py-2.5 text-base' };
export function Button({ variant='default', size='md', className='', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition';
  const styles = variant === 'outline'
    ? 'border border-white/10 bg-white/5 text-zinc-100 hover:bg-white/10'
    : 'bg-emerald-400 text-black hover:bg-emerald-300';
  const sz = sizeMap[size];
  return <button className={`${base} ${styles} ${sz} ${className}`} {...props} />;
}
