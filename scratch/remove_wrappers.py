import re

file_path = r"c:\Users\sayed\Downloads\Kimi_Agent_Clone HBJ Digital Lab\app\brochure\brochure.html"

with open(file_path, "r", encoding="utf-8") as f:
    html_content = f.read()

# Let's locate the grid container on Page 3
# It starts at: <!-- 8 Phases 2-Column Grid -->
# and ends at Page 4's start header or similar.

page3_grid_start_idx = html_content.find('<!-- 8 Phases 2-Column Grid -->')
page3_grid_end_idx = html_content.find('<!-- ════════════════════════════════\n       PAGE 4:')
if page3_grid_end_idx == -1:
    page3_grid_end_idx = html_content.find('<!-- ════════════════════════════════\r\n       PAGE 4:')

print(f"Page 3 grid indices: {page3_grid_start_idx} to {page3_grid_end_idx}")

# Let's clean the grid container for Page 3
new_page3_grid = """<!-- 8 Phases 2-Column Grid -->
    <div class="phase-grid-container phase-flow-wrapper">
      
      <!-- Phase 1 -->
      <div class="phase-grid-card phase-1">
        <div class="phase-grid-header">
          <div class="phase-grid-badge"><span>Phase 1</span></div>
          <div class="phase-grid-icon-circle" style="border-color: #0170B9;">
            <svg style="stroke: #0170B9;" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          </div>
          <div class="phase-grid-header-text">
            <h3 class="phase-grid-title">Executive Business Insight &amp; Vision Alignment</h3>
            <p class="phase-grid-timeline">TIMELINE: WEEK 1 | STRATEGIC ALIGNMENT SPRINT</p>
          </div>
        </div>
        <div class="phase-grid-body" style="padding:0;">
          <div class="phase-body-cols">
            <div class="phase-col phase-col-approach">
              <div class="phase-grid-text">
                <div class="phase-section-label">Approach</div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg><span>Align on your long-term goals, immediate bottlenecks, and 3–5 year vision</span></div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg><span>Conduct an <strong>Executive Business Intelligence Session</strong> for you and your leadership team</span></div>
              </div>
            </div>
            <div class="phase-col phase-col-deliverables">
              <div class="phase-grid-text">
                <div class="phase-section-label">Key Deliverables</div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg><span>World-class operational benchmarking — live metrics, tight governance, decision scorecards</span></div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg><span>Mindset alignment on best-in-class operations before touching workflows</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Phase 2 -->
      <div class="phase-grid-card phase-2">
        <div class="phase-grid-header">
          <div class="phase-grid-badge"><span>Phase 2</span></div>
          <div class="phase-grid-icon-circle" style="border-color: #F5A623;">
            <svg style="stroke: #F5A623;" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
          <div class="phase-grid-header-text">
            <h3 class="phase-grid-title">Priority Planning, Business Audit &amp; Diagnostic Assessment</h3>
            <p class="phase-grid-timeline">TIMELINE: WEEKS 2-3 | DIAGNOSTIC SPRINT</p>
          </div>
        </div>
        <div class="phase-grid-body" style="padding:0;">
          <div class="phase-body-cols">
            <div class="phase-col phase-col-approach">
              <div class="phase-grid-text">
                <div class="phase-section-label">Approach</div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><span>Structured diagnostic across: inventory, cash flow, sales, customer retention, employee output</span></div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><span>Surgical focus on highest-impact, highest-risk functions bleeding cash or bottlenecking growth</span></div>
              </div>
            </div>
            <div class="phase-col phase-col-deliverables">
              <div class="phase-grid-text">
                <div class="phase-section-label">Key Questions Answered</div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg><span>What's working? What's broken? What's costing? What's risky?</span></div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg><span>What's possible? What's next? — across the full operational ecosystem</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Phase 3 -->
      <div class="phase-grid-card phase-3">
        <div class="phase-grid-header">
          <div class="phase-grid-badge"><span>Phase 3</span></div>
          <div class="phase-grid-icon-circle" style="border-color: #8B5CF6;">
            <svg style="stroke: #8B5CF6;" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
          </div>
          <div class="phase-grid-header-text">
            <h3 class="phase-grid-title">Gap Analysis &amp; Executive Audit Review</h3>
            <p class="phase-grid-timeline">TIMELINE: WEEKS 4-6 | STRATEGY REVIEW SPRINT</p>
          </div>
        </div>
        <div class="phase-grid-body" style="padding:0;">
          <div class="phase-body-cols">
            <div class="phase-col phase-col-approach">
              <div class="phase-grid-text">
                <div class="phase-section-label">Approach</div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg><span>Translate raw findings, leakages, and risks into boardroom-ready intelligence</span></div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg><span>Conduct intensive <strong>Executive Audit Review</strong> with root-cause analysis</span></div>
              </div>
            </div>
            <div class="phase-col phase-col-deliverables">
              <div class="phase-grid-text">
                <div class="phase-section-label">Key Deliverables</div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg><span>Industry-benchmark gap analysis and risk prioritization</span></div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg><span>Pragmatic transformation roadmap calibrated to team bandwidth</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Phase 4 -->
      <div class="phase-grid-card phase-4">
        <div class="phase-grid-header">
          <div class="phase-grid-badge"><span>Phase 4</span></div>
          <div class="phase-grid-icon-circle" style="border-color: #10B981;">
            <svg style="stroke: #10B981;" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          </div>
          <div class="phase-grid-header-text">
            <h3 class="phase-grid-title">Process Re-Design, Technology &amp; Automation Planning</h3>
            <p class="phase-grid-timeline">TIMELINE: WEEKS 4-6 | OPERATING MODEL ARCHITECTURE</p>
          </div>
        </div>
        <div class="phase-grid-body" style="padding:0;">
          <div class="phase-body-cols">
            <div class="phase-col phase-col-approach">
              <div class="phase-grid-text">
                <div class="phase-section-label">Approach</div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9"/></svg><span>Architect your future operating model — predictable systems, not tribal knowledge</span></div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9"/></svg><span>Evaluate tech gaps and design ERP, CRM, and automation strategy</span></div>
              </div>
            </div>
            <div class="phase-col phase-col-deliverables">
              <div class="phase-grid-text">
                <div class="phase-section-label">Key Deliverables</div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg><span>Optimized workflows, clear SOPs, and master KPI framework</span></div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg><span>Exact digital architecture blueprint for a data-driven enterprise</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="running-footer">
      <span>MY COnsulting MOdel - your business transformation framework.</span>
      <span class="page-number">03</span>
    </div>
  </div>
"""

# Let's split html content, replace Page 3's grid container
page3_part_before = html_content[:page3_grid_start_idx]
page3_part_after = html_content[page3_grid_end_idx:]

html_content = page3_part_before + new_page3_grid + page3_part_after

# Now let's locate the grid container on Page 4
# It starts at: <!-- 8 Phases 1-Column Grid (Phases 5-8) -->
# and ends at Page 5's start header: <!-- ════════════════════════════════\n       PAGE 5:

page4_grid_start_idx = html_content.find('<!-- 8 Phases 1-Column Grid (Phases 5-8) -->')
page4_grid_end_idx = html_content.find('<!-- ════════════════════════════════\n       PAGE 5:')
if page4_grid_end_idx == -1:
    page4_grid_end_idx = html_content.find('<!-- ════════════════════════════════\r\n       PAGE 5:')

print(f"Page 4 grid indices: {page4_grid_start_idx} to {page4_grid_end_idx}")

# Let's clean the grid container for Page 4
# Note: we are also putting Phase 8 into a 2-column layout to match the others!
new_page4_grid = """<!-- 8 Phases 1-Column Grid (Phases 5-8) -->
    <div class="phase-grid-container phase-flow-wrapper">

      <!-- Phase 5 -->
      <div class="phase-grid-card phase-5">
        <div class="phase-grid-header">
          <div class="phase-grid-badge"><span>Phase 5</span></div>
          <div class="phase-grid-icon-circle" style="border-color: #F97316;">
            <svg style="stroke: #F97316;" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <div class="phase-grid-header-text">
            <h3 class="phase-grid-title">Implementation, Team Training &amp; Change Management</h3>
            <p class="phase-grid-timeline">TIMELINE: DYNAMIC SPRINTS | EMBEDDED EXECUTION</p>
          </div>
        </div>
        <div class="phase-grid-body" style="padding:0;">
          <div class="phase-body-cols">
            <div class="phase-col phase-col-approach">
              <div class="phase-grid-text">
                <div class="phase-section-label">Approach</div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><span>Stand shoulder-to-shoulder with your leadership team to drive execution</span></div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><span>Act as owner's representative for technology vendor onboarding and delivery</span></div>
              </div>
            </div>
            <div class="phase-col phase-col-deliverables">
              <div class="phase-grid-text">
                <div class="phase-section-label">Key Deliverables</div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg><span>Process deployment, manager coaching, and frontline team training</span></div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg><span>Change management to guarantee organizational adoption</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Phase 6 -->
      <div class="phase-grid-card phase-6">
        <div class="phase-grid-header">
          <div class="phase-grid-badge"><span>Phase 6</span></div>
          <div class="phase-grid-icon-circle" style="border-color: #EF4444;">
            <svg style="stroke: #EF4444;" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          </div>
          <div class="phase-grid-header-text">
            <h3 class="phase-grid-title">Performance Management &amp; Continuous Improvement</h3>
            <p class="phase-grid-timeline">TIMELINE: DYNAMIC SPRINTS | VISIBILITY SETUP</p>
          </div>
        </div>
        <div class="phase-grid-body" style="padding:0;">
          <div class="phase-body-cols">
            <div class="phase-col phase-col-approach">
              <div class="phase-grid-text">
                <div class="phase-section-label">Approach</div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg><span>Replace guesswork with <strong>real-time operational visibility</strong> via live data streams</span></div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg><span>Institutionalize structured weekly &amp; monthly business reviews (MBRs)</span></div>
              </div>
            </div>
            <div class="phase-col phase-col-deliverables">
              <div class="phase-grid-text">
                <div class="phase-section-label">Key Deliverables</div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg><span>Live executive dashboards and performance tracking tools</span></div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg><span>Leadership capability to spot anomalies and make data-backed moves</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Phase 7 -->
      <div class="phase-grid-card phase-7">
        <div class="phase-grid-header">
          <div class="phase-grid-badge"><span>Phase 7</span></div>
          <div class="phase-grid-icon-circle" style="border-color: #06B6D4;">
            <svg style="stroke: #06B6D4;" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          <div class="phase-grid-header-text">
            <h3 class="phase-grid-title">Governance &amp; Knowledge Transfer</h3>
            <p class="phase-grid-timeline">TIMELINE: DYNAMIC SPRINTS | TRANSITION PROTOCOLS</p>
          </div>
        </div>
        <div class="phase-grid-body" style="padding:0;">
          <div class="phase-body-cols">
            <div class="phase-col phase-col-approach">
              <div class="phase-grid-text">
                <div class="phase-section-label">Approach</div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span>Engineer the founder out of the day-to-day operational bottleneck</span></div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span>Build formal governance frameworks, reporting paths, and accountability hierarchies</span></div>
              </div>
            </div>
            <div class="phase-col phase-col-deliverables">
              <div class="phase-grid-text">
                <div class="phase-section-label">Key Deliverables</div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg><span>Centralized institutional knowledge and thorough knowledge transfer</span></div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg><span>Management layer empowered to own functions — permanently reducing founder dependency</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Phase 8 -->
      <div class="phase-grid-card phase-8">
        <div class="phase-grid-header">
          <div class="phase-grid-badge"><span>Phase 8</span></div>
          <div class="phase-grid-icon-circle" style="border-color: #64748B;">
            <svg style="stroke: #64748B;" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          </div>
          <div class="phase-grid-header-text">
            <h3 class="phase-grid-title">Strategic Advisory &amp; Founder's Office Partnership</h3>
            <p class="phase-grid-timeline">TIMELINE: ONGOING RETAINER | ADVISORY ALLIANCE</p>
          </div>
        </div>
        <div class="phase-grid-body" style="padding:0;">
          <div class="phase-body-cols">
            <div class="phase-col phase-col-approach">
              <div class="phase-grid-text">
                <div class="phase-section-label">Approach</div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg><span>Evolve from implementation partner to ongoing <strong>strategic advisory alliance</strong></span></div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg><span>Stay embedded as advisor for executive reviews, market opportunities, and capital allocation</span></div>
              </div>
            </div>
            <div class="phase-col phase-col-deliverables">
              <div class="phase-grid-text">
                <div class="phase-section-label">Key Deliverables</div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg><span>Monitoring structural health and strategic growth planning</span></div>
                <div class="phase-bullet-row"><svg class="phase-bullet-icon" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg><span>Sounding board for expansion, capital allocation, and macro strategy</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Bottom Evolution Chain -->
    <div class="evolution-chain" style="margin-top: 4mm;">
      <div class="chain-label">Evolution Path</div>
      <div class="chain-badges-row">
        <span class="chain-badge">Outcome</span>
        <span class="chain-arrow">&rsaquo;</span>
        <span class="chain-badge">Business Intelligence</span>
        <span class="chain-arrow">&rsaquo;</span>
        <span class="chain-badge">Execution</span>
        <span class="chain-arrow">&rsaquo;</span>
        <span class="chain-badge">Governance</span>
        <span class="chain-arrow">&rsaquo;</span>
        <span class="chain-badge active">Predictable Scale</span>
      </div>
    </div>

    <div class="running-footer">
      <span>MY COnsulting MOdel - your business transformation framework.</span>
      <span class="page-number">04</span>
    </div>
  </div>
"""

page4_part_before = html_content[:page4_grid_start_idx]
page4_part_after = html_content[page4_grid_end_idx:]

html_content = page4_part_before + new_page4_grid + page4_part_after

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html_content)

print("SUCCESSFULLY REMOVED WRAPPER DIVS AND MATCHED DIV BALANCES")
