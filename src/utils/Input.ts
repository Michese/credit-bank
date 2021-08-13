import { TInput } from '@/types/Input';

export function isValid(input: TInput): boolean {
  return input.pattern.test(input.value ? input.value : '');
}
