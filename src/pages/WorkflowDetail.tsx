import { useParams, Navigate } from 'react-router-dom';
import { WorkflowHero } from '../sections/workflow/WorkflowHero';
import { StepNavigator } from '../sections/workflow/StepNavigator';
import { StepCardsGrid } from '../sections/workflow/StepCardsGrid';
import { DashboardImpact } from '../sections/workflow/DashboardImpact';
import { getWorkflowBySlug } from '../data/workflows';

export function WorkflowDetail() {
  const { slug } = useParams<{ slug: string }>();
  const workflow = getWorkflowBySlug(slug || '');

  if (!workflow) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <WorkflowHero />
      <StepNavigator workflow={workflow} />
      <StepCardsGrid workflow={workflow} />
      <DashboardImpact />
    </>
  );
}
