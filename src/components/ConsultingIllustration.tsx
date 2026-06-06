import { BusinessArchitect } from './BusinessArchitect';
import { WhiteboardScene } from './WhiteboardScene';
import { TeamCollaboration } from './TeamCollaboration';
import { RetailStoreSketch } from './RetailStoreSketch';
import { FloatingBusinessAssets } from './FloatingBusinessAssets';
import { ArchitectureStack3D } from './ArchitectureStack3D';
import { WorkflowRibbon } from './WorkflowRibbon';

export function ConsultingIllustration() {
  return (
    <div className="relative w-full flex flex-col gap-4">
      {/* Top: Workflow ribbon */}
      <WorkflowRibbon />
      {/* Bottom: The scene */}
      <div className="relative w-full" style={{ height: '360px' }}>
        <RetailStoreSketch />
        <WhiteboardScene />
        <BusinessArchitect />
        <TeamCollaboration />
        <FloatingBusinessAssets />
        {/* Architecture stack — center */}
        <div className="absolute left-1/2 top-[20px] -translate-x-1/2 w-[280px]">
          <ArchitectureStack3D />
        </div>
      </div>
    </div>
  );
}
