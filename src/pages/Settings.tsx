import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Settings as SettingsIcon } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Configure your SEO monitoring preferences</p>
      </div>

      {/* Critical Alert Thresholds */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5" />
            Critical Alert Thresholds
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Set the percentage thresholds that trigger critical alerts for your content performance
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="revenue-decrease">Revenue Decrease (%)</Label>
              <Input
                id="revenue-decrease"
                type="number"
                defaultValue="15"
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Alert when revenue drops by this percentage
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ctr-decrease">CTR Decrease (%)</Label>
              <Input
                id="ctr-decrease"
                type="number"
                defaultValue="15"
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Alert when click-through rate drops by this percentage
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="traffic-decrease">Traffic Decrease (%)</Label>
              <Input
                id="traffic-decrease"
                type="number"
                defaultValue="15"
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Alert when organic traffic drops by this percentage
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="position-decrease">Position Decrease (%)</Label>
              <Input
                id="position-decrease"
                type="number"
                defaultValue="15"
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Alert when average position drops by this percentage
              </p>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="content-freshness">Content Freshness (days)</Label>
            <Input
              id="content-freshness"
              type="number"
              defaultValue="90"
              className="w-full max-w-xs"
            />
            <p className="text-xs text-muted-foreground">
              Alert when content hasn't been updated for this many days
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;