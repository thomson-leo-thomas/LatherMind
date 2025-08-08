import { Card, CardContent } from '@/components/ui/card';

export default function ScoringTables() {
  return (
    <div className="mt-16 space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8" data-testid="text-methodology-title">
        Scoring Methodology
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Class Interpretation */}
        <Card className="shadow-lg border border-gray-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <i className="fas fa-tags text-primary mr-2"></i>Class Interpretation
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" data-testid="table-class-interpretation">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-medium text-gray-700">Class</th>
                    <th className="text-left p-3 font-medium text-gray-700">Interpretation</th>
                    <th className="text-right p-3 font-medium text-gray-700">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">🧼 Brick of Purity</td>
                    <td className="p-3">Bar Soap</td>
                    <td className="p-3 text-right font-medium text-green-600">+30</td>
                  </tr>
                  <tr>
                    <td className="p-3">🧴 Potion of Cleanliness</td>
                    <td className="p-3">Liquid Soap</td>
                    <td className="p-3 text-right font-medium text-blue-600">+25</td>
                  </tr>
                  <tr>
                    <td className="p-3">🧽 Soap Doppelgänger</td>
                    <td className="p-3">Not Soap (Imposter!)</td>
                    <td className="p-3 text-right font-medium text-red-600">+0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Color Interpretation */}
        <Card className="shadow-lg border border-gray-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <i className="fas fa-palette text-secondary mr-2"></i>Color Interpretation
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" data-testid="table-color-interpretation">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-medium text-gray-700">Color Range</th>
                    <th className="text-left p-3 font-medium text-gray-700">Interpretation</th>
                    <th className="text-right p-3 font-medium text-gray-700">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">Bright Blue/White</td>
                    <td className="p-3">Cosmically Pure</td>
                    <td className="p-3 text-right font-medium text-green-600">+20</td>
                  </tr>
                  <tr>
                    <td className="p-3">Light Pink/Yellow</td>
                    <td className="p-3">Spiritually Acceptable</td>
                    <td className="p-3 text-right font-medium text-yellow-600">+15</td>
                  </tr>
                  <tr>
                    <td className="p-3">Grey/Dull</td>
                    <td className="p-3">Mundane & Earthly</td>
                    <td className="p-3 text-right font-medium text-gray-600">+10</td>
                  </tr>
                  <tr>
                    <td className="p-3">Muddy/Dark</td>
                    <td className="p-3">Soap of the Underworld</td>
                    <td className="p-3 text-right font-medium text-red-600">+0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Shape Interpretation */}
        <Card className="shadow-lg border border-gray-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <i className="fas fa-shapes text-purple-500 mr-2"></i>Shape Interpretation
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" data-testid="table-shape-interpretation">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-medium text-gray-700">Detected Shape</th>
                    <th className="text-left p-3 font-medium text-gray-700">Interpretation</th>
                    <th className="text-right p-3 font-medium text-gray-700">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">Smooth Solid Contours</td>
                    <td className="p-3">Sacredly Formed</td>
                    <td className="p-3 text-right font-medium text-green-600">+20</td>
                  </tr>
                  <tr>
                    <td className="p-3">Wobbly/Irregular Edge</td>
                    <td className="p-3">Spiritually Incomplete</td>
                    <td className="p-3 text-right font-medium text-yellow-600">+10</td>
                  </tr>
                  <tr>
                    <td className="p-3">Fragmented/No Shape</td>
                    <td className="p-3">Chaotic Foam Entity</td>
                    <td className="p-3 text-right font-medium text-red-600">+0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Sharpness Interpretation */}
        <Card className="shadow-lg border border-gray-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <i className="fas fa-eye text-accent mr-2"></i>Sharpness (Laplacian Variance)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" data-testid="table-sharpness-interpretation">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-medium text-gray-700">Value Level</th>
                    <th className="text-left p-3 font-medium text-gray-700">Interpretation</th>
                    <th className="text-right p-3 font-medium text-gray-700">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">High (&gt;1000)</td>
                    <td className="p-3">Crystal Clear</td>
                    <td className="p-3 text-right font-medium text-green-600">+10</td>
                  </tr>
                  <tr>
                    <td className="p-3">Medium (100-1000)</td>
                    <td className="p-3">Slightly Fogged</td>
                    <td className="p-3 text-right font-medium text-yellow-600">+5</td>
                  </tr>
                  <tr>
                    <td className="p-3">Low (&lt;100)</td>
                    <td className="p-3">Fuzzy Suds</td>
                    <td className="p-3 text-right font-medium text-red-600">+0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}