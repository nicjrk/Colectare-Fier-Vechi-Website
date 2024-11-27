import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MATERIAL_PRICES } from '@/lib/constants';

interface MaterialSelectProps {
  value: keyof typeof MATERIAL_PRICES;
  onChange: (value: keyof typeof MATERIAL_PRICES) => void;
}

export function MaterialSelect({ value, onChange }: MaterialSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selectați materialul" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(MATERIAL_PRICES).map(([key, { name }]) => (
          <SelectItem key={key} value={key}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}