import CEOOverlook from '@/components/CEOOverlook';
import AutonomyMatrix from '@/components/AutonomyMatrix';
import HiveTerminal from '@/components/HiveTerminal';

export default function Home() {
  return (
    <div className="p-12 space-y-12">
      {/* Top Section: Executive Controls & Status */}
      <section>
        <CEOOverlook />
      </section>

      {/* Middle/Bottom Section: Visual Graph and Logs */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 h-[600px]">
          <AutonomyMatrix />
        </div>
        <div className="h-[600px]">
          <HiveTerminal />
        </div>
      </div>
    </div>
  );
}
