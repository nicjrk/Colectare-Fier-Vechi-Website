import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MaterialSelect } from './calculator/MaterialSelect';
import { MATERIAL_PRICES } from '@/lib/constants';

export function PriceCalculator() {
  const [weight, setWeight] = useState<string>('');
  const [material, setMaterial] = useState<keyof typeof MATERIAL_PRICES>('iron');
  const [total, setTotal] = useState<number | null>(null);

  const calculatePrice = () => {
    const price = MATERIAL_PRICES[material].price * Number(weight);
    setTotal(price);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Calculator Preț</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Material</label>
          <MaterialSelect value={material} onChange={setMaterial} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Greutate (kg)</label>
          <Input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Introduceți greutatea"
          />
        </div>
        <Button onClick={calculatePrice} className="w-full">
          Calculează
        </Button>
        {total !== null && (
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold">
              Preț Estimat: {total.toFixed(2)} RON
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}