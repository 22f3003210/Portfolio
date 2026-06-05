export interface WorkflowStep {
  number: number;
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  duration: string;
  output: string;
  details?: string[];
  trace?: string[];
}

export interface Workflow {
  id: number;
  slug: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  metrics: string[];
  steps: WorkflowStep[];
  poVariants?: {
    Variant_A: { steps: WorkflowStep[] };
    Variant_B: { steps: WorkflowStep[] };
    Variant_C: { steps: WorkflowStep[] };
    Variant_D: { steps: WorkflowStep[] };
    inefficiencies: {
      category: string;
      items: string[];
    }[];
    comparison: {
      aspect: string;
      withPO: string;
      withoutPO: string;
    }[];
  };
}

export const workflows: Workflow[] = [
  {
    id: 1,
    slug: 'p2p-jewellery-supply-chain',
    name: 'Procure-to-Pay (P2P)',
    category: 'Jewellery Supply Chain',
    description: 'End-to-end raw material procurement → supplier payment with live gold rates',
    icon: '📦',
    metrics: ['~ 5–10 days cycle', 'Automated reconciliation', 'Live MCX integration'],
    steps: [
      {
        number: 1,
        icon: '📋',
        title: 'Supplier Onboarding',
        description: 'Live MCX gold price feed setup (15-min refresh)',
        bullets: [
          'GST/PAN/metal purity certificates',
          'Wastage rates & making charges config',
          'New supplier approval workflow',
          'Primary/secondary classification',
        ],
        duration: '45 min',
        output: 'Rate-linked supplier profile',
      },
      {
        number: 2,
        icon: '📈',
        title: 'Purchase Requisition',
        description: 'Real-time gold rate COGS calculation',
        bullets: [
          'Gold qty / purity / design specs',
          'Auto: MCX + wastage + making charges',
          'Budget vs store targets validation',
          'Margin threshold approval',
        ],
        duration: '10 min',
        output: 'Rate-locked requisition',
      },
      {
        number: 3,
        icon: '🛒',
        title: 'Purchase Order',
        description: 'Legal PO with rate protection clause',
        bullets: [
          'Live rate snapshot in PO',
          'Supplier delivery timeline confirmation',
          'Token ID reconciliation tracking',
          'WhatsApp / digital signature',
        ],
        duration: '8 min',
        output: 'Confirmed PO',
      },
      {
        number: 4,
        icon: '🔍',
        title: 'Goods Receipt',
        description: 'Token-based quality verification',
        bullets: [
          'Physical weighing & purity test',
          'Token prevents duplicate logging',
          'Weight / design specs inspection',
          'Production / Karat storage move',
        ],
        duration: '30 min',
        output: 'Verified receipt',
      },
      {
        number: 5,
        icon: '⚖️',
        title: 'Invoice Matching',
        description: 'Three-way match + rate reconciliation',
        bullets: [
          'PO rate ↔ Receipt weight ↔ Invoice',
          '±2% rate variance tolerance',
          'Margin validation pre-approval',
          'Auto-discrepancy flagging',
        ],
        duration: '5 min',
        output: 'Matched payable',
      },
      {
        number: 6,
        icon: '💳',
        title: 'Supplier Payment',
        description: 'GST-compliant processing',
        bullets: [
          'Match approval → payment queue',
          'GST invoice validation',
          'NEFT / RTGS batch payment',
          'Supplier portal update',
        ],
        duration: 'Weekly 2 hr',
        output: 'Paid supplier',
      },
      {
        number: 7,
        icon: '📊',
        title: 'Reconciliation & Reporting',
        description: 'Weekly P2P performance dashboard',
        bullets: [
          'Cycle time tracking (req → payment)',
          'Supplier scorecard (delivery / quality)',
          'Loss detection (rate delays / schemes)',
          'Power BI: 7.2 days avg | 98% accuracy',
        ],
        duration: 'Weekly 3 hr',
        output: '+15% vs last month',
      },
    ],
    poVariants: {
      Variant_A: {
        steps: [
          {
            number: 1,
            icon: '📋',
            title: 'Supplier Onboarding',
            description: 'Supplier registration and trade agreement lock',
            bullets: ['Online portal registration link', 'GST/PAN/bank verification & KYC', 'Assign payment terms & currencies', 'Pricing wastage & QC rules lock'],
            duration: '1 hr',
            output: 'Supplier Master',
            trace: [
              '[PORTAL] Supplier digital KYC & GSTIN validated successfully',
              '[ERP] Supplier master record created under ID: VND-2026-9041',
              '[SYS] Wastage parameters (max 3.5%) & billing cycles locked in system'
            ]
          },
          {
            number: 2,
            icon: '🏷️',
            title: 'SKU & Attribute Setup',
            description: 'Defining metals, stones, and finished goods parameters',
            bullets: ['Metal: purity, color, form rules', 'Stones: type, size, grading specs', 'Structured SKU code generation', 'Enforce SKU usage on transactions'],
            duration: '30 min',
            output: 'SKU Registry',
            trace: [
              '[ERP] SKU categories mapped: 22K Yellow Gold, 18K Diamond Jewellery',
              '[ERP] Purity thresholds & Stone Grading guidelines configured',
              '[SYS] System locks SKU parameter usage; ad-hoc SKU tags forbidden'
            ]
          },
          {
            number: 3,
            icon: '📈',
            title: 'Requisition & PO Creation',
            description: 'Formal branch request converted to signed PO',
            bullets: ['Store/branch raises requisition', 'Value & category approval matrix', 'Procurement issues rate-locked PO', 'PO sent digitally for vendor sign'],
            duration: '15 min',
            output: 'Released PO',
            trace: [
              '[ERP] Showroom raised stock requisition based on sales trends',
              '[ERP] Automated validation against regional showroom procurement budget',
              '[SYS] Signed digital PO issued with live gold rate snapshot lock'
            ]
          },
          {
            number: 4,
            icon: '🚚',
            title: 'Vendor Portal Actions',
            description: 'Vendor pre-shipment logging & QC-1',
            bullets: ['Vendor uploads item list & specs', 'Scales weight feed (no manual edit)', 'Phase-1 QC check with photos', 'Transporter & shipping AWB booking'],
            duration: '45 min',
            output: 'In Transit Status',
            trace: [
              '[PORTAL] Supplier uploaded item list and digital purity certificates',
              '[PORTAL] Direct scale weight integration recorded package weight',
              '[SYS] Phase-1 checklist completed; airway bill (AWB) generated'
            ]
          },
          {
            number: 5,
            icon: '📥',
            title: 'Receiving & Storage',
            description: 'Shipment arrival and storage assignment',
            bullets: ['Match AWB & PO in system', 'Header GRN created on arrival', 'Assign vault locker or bag ID', 'Auto-assign QC inspector'],
            duration: '20 min',
            output: 'Warehouse Inward',
            trace: [
              '[SYS] Package scanned at showroom; matched to airway bill in ERP',
              '[ERP] Initial Header GRN generated on cargo arrival',
              '[SEC] Consignment moved to Vault Locker under Bag ID: BAG-9041A'
            ]
          },
          {
            number: 6,
            icon: '🔍',
            title: 'GRN Entry & Variance Check',
            description: 'Weighing received items vs PO values',
            bullets: ['Physical weight entry in ERP', 'Compare PO vs Vendor vs Recd', 'Variance calculated per item', 'Exception approval trigger if error'],
            duration: '30 min',
            output: 'Approved GRN',
            trace: [
              '[ERP] Direct weight scale integration recorded actual received weight',
              '[ERP] Variance analysis: weight deviation is 0.08g (within 0.1g tolerance)',
              '[SYS] GRN approved and status updated to \'Inward Complete\''
            ]
          },
          {
            number: 7,
            icon: '🔬',
            title: 'QC Phase-2 & Segregation',
            description: 'Detailed quality audit & fail management',
            bullets: ['Assay/Karatometer purity check', 'Visual setting & finish inspection', 'Physical segregation (Pass/Fail bags)', 'Create return document for fails'],
            duration: '45 min',
            output: 'QC Clearance',
            trace: [
              '[DEV] Karatometer testing completed; gold purity verified at 91.68%',
              '[ERP] Itemized quality status updated: 142 items PASSED, 2 items FAILED',
              '[SYS] FAILED items moved to Return Ledger; Return Note RTN-9021 generated'
            ]
          },
          {
            number: 8,
            icon: '⚖️',
            title: 'Rate-Cut Finalisation',
            description: 'Locking pricing based on gold rate agreements',
            bullets: ['Apply contract pricing rules', 'Initiate rate-cut if delays/faults', 'Vendor reviews and accepts rate-cut', 'Final commercial values locked'],
            duration: '20 min',
            output: 'Locked Rate',
            trace: [
              '[API] Live gold rate pulled from MCX: ₹72,450 / 10g',
              '[ERP] Executed contract rate-cut for 1.25 kg gold allotment',
              '[PORTAL] Supplier reviewed and accepted rate-cut lock electronically'
            ]
          },
          {
            number: 9,
            icon: '🧾',
            title: 'Invoice & 3-Way Match',
            description: 'Invoice verification vs PO & GRN',
            bullets: ['Vendor uploads invoice via portal', '3-way match (PO ↔ GRN ↔ Invoice)', 'Auto-flag rate & weight mismatches', 'Post clean matched invoice to AP'],
            duration: '10 min',
            output: 'Posted Payable',
            trace: [
              '[PORTAL] Supplier uploaded tax invoice file',
              '[ERP] Auto-matched: PO (1.25kg) ↔ GRN (1.249kg) ↔ Invoice (1.249kg)',
              '[SYS] Rate & weight variance validation: PASSED. Posted to AP'
            ]
          },
          {
            number: 10,
            icon: '💳',
            title: 'Payment & AP Closing',
            description: 'Disbursing batch payments to vendor',
            bullets: ['Finance runs payment proposals', 'Payment approval workflow check', 'Execute NEFT/RTGS batch transfer', 'Clear AP ledger & notify vendor'],
            duration: 'Daily 30 min',
            output: 'Cleared Ledger',
            trace: [
              '[FIN] Batch payment run proposal generated for finance head',
              '[API] Executed bank batch RTGS transfer to supplier account',
              '[ERP] Accounts Payable ledger closed; vendor notified of transaction ID'
            ]
          },
          {
            number: 11,
            icon: '📊',
            title: 'SLA & KPI Tracking',
            description: 'Continuous process analytics monitoring',
            bullets: ['Measure timestamps across steps', 'Track on-time delivery (OTD)', 'Supplier pass rate & return score', 'P2P bottlenecks hotspot dashboard'],
            duration: 'Continuous',
            output: 'KPI Dashboard',
            trace: [
              '[BI] SLA tracked: P2P cycle time was 6.4 days (target < 7 days)',
              '[BI] Supplier performance card updated: OTD 98.2%, QC Pass 98.5%',
              '[SYS] Weekly operational audit logs finalized and archived'
            ]
          }
        ]
      },
      Variant_B: {
        steps: [
          {
            number: 1,
            icon: '📋',
            title: 'Supplier Onboarding',
            description: 'Manual supplier setup by HO Procurement',
            bullets: ['GST/PAN/metal purity certificates', 'Manual trade agreements config', 'Supplier master entry in ERP', 'HO verification & approval'],
            duration: '1 hr',
            output: 'Approved supplier entry',
            trace: [
              '[ERP] Staff manually keyed supplier bank info & KYC from physical documents',
              '[ERP] Supplier master record created under ID: VND-2026-9042',
              '[SYS] Manual entry approval verified by HO Procurement head'
            ]
          },
          {
            number: 2,
            icon: '🏷️',
            title: 'SKU & Attribute Setup',
            description: 'Defining metals, stones, and finished goods parameters',
            bullets: ['Metal: purity, color, form rules', 'Stones: type, size, grading specs', 'Structured SKU code generation', 'Enforce SKU usage on transactions'],
            duration: '30 min',
            output: 'SKU Registry',
            trace: [
              '[ERP] SKU categories mapped: 22K Yellow Gold, 18K Diamond',
              '[ERP] Staff manually mapped purity & design codes in SKU catalog',
              '[SYS] SKU validation check enabled on transaction screen'
            ]
          },
          {
            number: 3,
            icon: '📈',
            title: 'Requisition & PO Creation',
            description: 'Centralized requisition review & PO creation',
            bullets: ['Branches raise showroom requisitions', 'Procurement validates against budget', 'Live gold price locked in PO', 'PO sent for supplier confirmation'],
            duration: '15 min',
            output: 'Supplier-confirmed PO',
            trace: [
              '[ERP] Branch manager submitted physical requisition form to HO',
              '[ERP] HO operator manually created system requisition',
              '[SYS] Released PO sent to supplier email as PDF attachment'
            ]
          },
          {
            number: 4,
            icon: '📦',
            title: 'Manual Inward Setup',
            description: 'Vendor has no portal; sends physical consignment details. Staff manually records item details and weights in ERP',
            bullets: ['Receive physical slip & check items', 'Staff manually registers weight data', 'No direct vendor portal connection', 'Update shipment status manually'],
            duration: '45 min',
            output: 'Consignment Logged',
            trace: [
              '[ERP] Staff manually created inbound log from vendor\'s courier slip',
              '[ERP] Consignment package weight manually typed from paper label',
              '[SYS] Inbound shipment set to \'Expected\' state'
            ]
          },
          {
            number: 5,
            icon: '📥',
            title: 'Receiving & Storage',
            description: 'Shipment arrival and storage assignment',
            bullets: ['Match physical AWB & PO in system', 'Header GRN created on arrival', 'Assign vault locker or bag ID', 'Auto-assign QC inspector'],
            duration: '20 min',
            output: 'Warehouse Inward',
            trace: [
              '[ERP] Operator matched physical box label to PO number manually',
              '[ERP] Header GRN generated manually in ERP',
              '[SEC] Box stored in showroom vault under manual registry entry'
            ]
          },
          {
            number: 6,
            icon: '🔍',
            title: 'GRN Entry & Variance Check',
            description: 'Weighing received items vs PO values',
            bullets: ['Physical weight entry in ERP', 'Compare PO vs Vendor vs Recd', 'Variance calculated per item', 'Exception approval trigger if error'],
            duration: '30 min',
            output: 'Approved GRN',
            trace: [
              '[ERP] Staff manually read weight from scale and keyed 1248.5g into ERP',
              '[ERP] Manual variance check: compared physical invoice weight with GRN',
              '[SYS] GRN approved after manual review of 0.2g discrepancy'
            ]
          },
          {
            number: 7,
            icon: '🔬',
            title: 'QC Phase-2 & Segregation',
            description: 'Detailed quality audit & fail management',
            bullets: ['Assay/Karatometer purity check', 'Visual setting & finish inspection', 'Physical segregation (Pass/Fail bags)', 'Create return document for fails'],
            duration: '45 min',
            output: 'QC Clearance',
            trace: [
              '[DEV] Staff verified purity using Karatometer; printed physical report',
              '[ERP] Staff manually updated item quality flags in GRN log',
              '[SYS] Created manual return list for 3 rejected rings'
            ]
          },
          {
            number: 8,
            icon: '⚖️',
            title: 'Rate-Cut Finalisation',
            description: 'Locking pricing based on gold rate agreements',
            bullets: ['Apply contract pricing rules', 'Initiate rate-cut if delays/faults', 'Vendor reviews and accepts rate-cut', 'Final commercial values locked'],
            duration: '20 min',
            output: 'Locked Rate',
            trace: [
              '[API] Live gold rate pulled from MCX: ₹72,450 / 10g',
              '[ERP] Staff manually keyed agreed booking rate of ₹72,380',
              '[SYS] Saved signed rate-cut agreement PDF to supplier master attachments'
            ]
          },
          {
            number: 9,
            icon: '🧾',
            title: 'Manual Invoice Matching',
            description: 'Manual invoice entry and 3-way match in ERP',
            bullets: ['Finance manually records invoice details', 'Match PO & GRN manually in ERP', 'Resolve mismatches via WhatsApp/email', 'Post invoice to Accounts Payable queue'],
            duration: '15 min',
            output: 'Manual Posted Payable',
            trace: [
              '[ERP] Finance clerk manually recorded supplier physical invoice details',
              '[ERP] Checked line items manually against physical PO & GRN copies',
              '[SYS] Mismatched tax amount resolved via phone; posted manually to AP'
            ]
          },
          {
            number: 10,
            icon: '💳',
            title: 'Payment & AP Closing',
            description: 'Disbursing batch payments to vendor',
            bullets: ['Finance runs payment proposals', 'Payment approval workflow check', 'Execute NEFT/RTGS batch transfer', 'Clear AP ledger & notify vendor'],
            duration: 'Daily 30 min',
            output: 'Cleared Ledger',
            trace: [
              '[ERP] Accounts Payable clerk selected invoice for payment proposal',
              '[FIN] Staff logged in to banking portal to execute RTGS manually',
              '[SYS] Ledger updated manually after uploading bank receipt screenshot'
            ]
          },
          {
            number: 11,
            icon: '📊',
            title: 'SLA & KPI Tracking',
            description: 'Continuous process analytics monitoring',
            bullets: ['Measure timestamps across steps', 'Track on-time delivery (OTD)', 'Supplier pass rate & return score', 'P2P bottlenecks hotspot dashboard'],
            duration: 'Continuous',
            output: 'KPI Dashboard',
            trace: [
              '[BI] SLA tracked: total P2P cycle time was 9.8 days (delays in manual entry)',
              '[BI] Supplier performance record updated manually',
              '[SYS] Monthly audit records compiled via Excel spreadsheet'
            ]
          }
        ]
      },
      Variant_C: {
        steps: [
          {
            number: 1,
            icon: '👤',
            title: 'Need Identified Informally',
            description: 'Ad-hoc request without system entry',
            bullets: ['Owner/salesperson suggests buying', 'No digital request or validation', 'No budget checking or limit check', 'Decision based on ad-hoc shortage'],
            duration: '10 min',
            output: 'Oral Need',
            trace: [
              '[SYS] Warning: Step initiated without requisition or budget validation',
              '[SYS] No PO trace exists. Ad-hoc need verbal discussion logged',
              '[SYS] Risk: Lack of purchase planning leads to emergency stock sourcing'
            ]
          },
          {
            number: 2,
            icon: '💬',
            title: 'Owner Gathers Reqs',
            description: 'Owner polls staff for customer trends',
            bullets: ['Oral feedback from counter staff', 'Personal design taste selection', 'No sales data validation', 'Gut-based stocking decision'],
            duration: '1 hr',
            output: 'Verbal Specs',
            trace: [
              '[SYS] Owner gathered requests via WhatsApp messages from showroom staff',
              '[SYS] Style trends and weight requirements estimated verbally',
              '[SYS] Risk: Missing historic sales trend validation'
            ]
          },
          {
            number: 3,
            icon: '🏢',
            title: 'No Vendor Master',
            description: 'Buying from arbitrary local dealers',
            bullets: ['Street vendors & dealers selected', 'No KYC or financial risk audits', 'No locked price wastage contracts', 'Missing regulatory compliance check'],
            duration: 'Varies',
            output: 'Ad-hoc Vendor',
            trace: [
              '[SYS] Warning: Vendor master lookup failed',
              '[SYS] Vendor set as temporary dealer without credit or risk assessment',
              '[SYS] Risk: Purchasing from unverified source; high compliance exposure'
            ]
          },
          {
            number: 4,
            icon: '🚚',
            title: 'Vendor Portal Ship',
            description: 'Vendor books shipment and uploads specs on portal',
            bullets: ['Vendor inputs weights on portal', 'Verify weights against verbal agreements', 'Pre-shipment photo upload', 'Online AWB shipment booking'],
            duration: '30 min',
            output: 'Shipment Logged',
            trace: [
              '[PORTAL] Vendor uploaded packing slip & weights to vendor portal',
              '[SYS] Staff verified vendor inputs against verbal agreements',
              '[SYS] Airway bill (AWB) registered on portal'
            ]
          },
          {
            number: 5,
            icon: '📦',
            title: 'Goods Arrive',
            description: 'Informal box receiving at showroom',
            bullets: ['Count boxes at showroom counter', 'Put items directly onto trays/vaults', 'No GRN matched to original order', 'Stock entry logged on manual pad'],
            duration: '20 min',
            output: 'Unchecked Stock',
            trace: [
              '[SYS] Consignment arrived at showroom; no PO in system to match',
              '[ERP] Manual inward receipt entry created without reference document',
              '[SYS] Risk: Unchecked stock levels; high chance of weight discrepancies'
            ]
          },
          {
            number: 6,
            icon: '👁️',
            title: 'No Formal QC',
            description: 'Basic visual sanity check by store staff',
            bullets: ['Quick glance at setting/polish', 'No assay/purity verified records', 'No Pass/Fail labels or segregation', 'Faults discovered later by customer'],
            duration: '10 min',
            output: 'Assumed Good',
            trace: [
              '[SYS] Basic visual inspection conducted by showroom cashier',
              '[SYS] No scientific purity verification or assay record logged',
              '[SYS] Risk: Assumed purity; high risk of receiving under-karatage jewellery'
            ]
          },
          {
            number: 7,
            icon: '🧾',
            title: 'Portal Invoice Upload',
            description: 'Vendor uploads invoice file directly to portal',
            bullets: ['Invoice uploaded electronically by vendor', 'Operator verifies against manual logs', 'Flag invoice amount deviations', 'Match to verbal purchase records'],
            duration: '10 min',
            output: 'Invoice Registered',
            trace: [
              '[PORTAL] Vendor uploaded tax invoice directly via portal',
              '[ERP] Operator manually matched invoice to verbal log',
              '[SYS] Warning: Invoice marked as \'No-PO\' purchase; flagged for audit'
            ]
          },
          {
            number: 8,
            icon: '💸',
            title: 'Payment Approval',
            description: 'Owner verbally authorizes payout',
            bullets: ['Owner instructs cashier via call', 'Direct showroom cash box payout', 'Or direct manual NEFT online bank', 'No validation of receipt details'],
            duration: '10 min',
            output: 'Manual Bank Payout',
            trace: [
              '[SYS] Owner verbally authorized payment over phone call',
              '[FIN] Cashier paid advance from showroom cash drawer or online banking',
              '[SYS] Risk: Lack of 3-way match audit trail allows duplicate payment risk'
            ]
          },
          {
            number: 9,
            icon: '📉',
            title: 'No KPI Tracking',
            description: 'Buying details remain unmeasured',
            bullets: ['No lead times or delays captured', 'No vendor quality scorecards', 'Unknown leakages in gold weight/rates', 'Decisions remain gut-based'],
            duration: 'None',
            output: 'Untracked Ops',
            trace: [
              '[SYS] Warning: Operational KPIs cannot be calculated (missing PO timestamp)',
              '[SYS] Vendor performance scorecards disabled',
              '[SYS] Leakage audit: rates, weights, and wastage remain unmeasured'
            ]
          }
        ]
      },
      Variant_D: {
        steps: [
          {
            number: 1,
            icon: '👤',
            title: 'Need Identified Informally',
            description: 'Ad-hoc request without system entry',
            bullets: ['Owner/salesperson suggests buying', 'No digital request or validation', 'No budget checking or limit check', 'Decision based on ad-hoc shortage'],
            duration: '10 min',
            output: 'Oral Need',
            trace: [
              '[SYS] Warning: Step initiated without requisition or budget validation',
              '[SYS] No system log exists. Ad-hoc need verbal discussion logged',
              '[SYS] Risk: Zero controls on store purchasing limits'
            ]
          },
          {
            number: 2,
            icon: '💬',
            title: 'Owner Gathers Reqs',
            description: 'Owner polls staff for customer trends',
            bullets: ['Oral feedback from counter staff', 'Personal design taste selection', 'No sales data validation', 'Gut-based stocking decision'],
            duration: '1 hr',
            output: 'Verbal Specs',
            trace: [
              '[SYS] Owner gathered showroom requests verbally on retail floor',
              '[SYS] Stock selection based entirely on owner\'s personal taste',
              '[SYS] Risk: Overstocking of slow-moving items'
            ]
          },
          {
            number: 3,
            icon: '🏢',
            title: 'No Vendor Master',
            description: 'Buying from arbitrary local dealers',
            bullets: ['Street vendors & dealers selected', 'No KYC or financial risk audits', 'No locked price wastage contracts', 'Missing regulatory compliance check'],
            duration: 'Varies',
            output: 'Ad-hoc Vendor',
            trace: [
              '[SYS] Warning: Vendor master lookup failed',
              '[SYS] Street dealer selected for cash purchase; KYC incomplete',
              '[SYS] Risk: Regulatory compliance alerts triggered; missing GST checks'
            ]
          },
          {
            number: 4,
            icon: '📱',
            title: 'Direct Purchase (No PO)',
            description: 'Verbal purchase lock via WhatsApp/phone',
            bullets: ['WhatsApp photo or call purchase', 'Rate agreed verbally (unsecured)', 'Immediate UPI/NEFT bank advance', 'No reference document created'],
            duration: '10 min',
            output: 'Verbal Lock',
            trace: [
              '[COM] Verbal transaction locked over phone/WhatsApp',
              '[SYS] No PO number generated; no rate lock contract exists',
              '[SYS] Risk: High exposure to vendor price changes during transit'
            ]
          },
          {
            number: 5,
            icon: '📦',
            title: 'Goods Arrive',
            description: 'Informal box receiving at showroom',
            bullets: ['Count boxes at showroom counter', 'Put items directly onto trays/vaults', 'No GRN matched to original order', 'Stock entry logged on manual pad'],
            duration: '20 min',
            output: 'Unchecked Stock',
            trace: [
              '[SYS] Consignment package received at showroom counter',
              '[ERP] Manual inventory entry created without PO reference',
              '[SYS] Risk: Loose stock counted manually on paper pad; high data entry error'
            ]
          },
          {
            number: 6,
            icon: '👁️',
            title: 'No Formal QC',
            description: 'Basic visual sanity check by store staff',
            bullets: ['Quick glance at setting/polish', 'No assay/purity verified records', 'No Pass/Fail labels or segregation', 'Faults discovered later by customer'],
            duration: '10 min',
            output: 'Assumed Good',
            trace: [
              '[SYS] Visual sanity check only; no Karatometer test performed',
              '[SYS] No formal Pass/Fail storage segregation',
              '[SYS] Risk: Customer return risk due to undetected quality defects'
            ]
          },
          {
            number: 7,
            icon: '🧾',
            title: 'Manual Invoice Entry',
            description: 'Operator manually records bill amount',
            bullets: ['Photo of bill received via phone', 'Manual journal entry in backend', 'No validation vs PO or GRN weight', 'No rate-variance threshold checks'],
            duration: '20 min',
            output: 'Manual Bill Log',
            trace: [
              '[ERP] Staff manually keyed in total bill amount from WhatsApp screenshot',
              '[SYS] Warning: Invoice posted without GRN or PO verification',
              '[SYS] Risk: Direct ledger posting bypasses all pricing gatekeepers'
            ]
          },
          {
            number: 8,
            icon: '💸',
            title: 'Payment Approval',
            description: 'Owner verbally authorizes payout',
            bullets: ['Owner instructs cashier via call', 'Direct showroom cash box payout', 'Or direct manual NEFT online bank', 'No validation of receipt details'],
            duration: '10 min',
            output: 'Manual Bank Payout',
            trace: [
              '[SYS] Owner verbally approved payout; manual bank transfer executed',
              '[FIN] Cashier recorded payment voucher manually in ledger',
              '[SYS] Risk: Zero matching; duplicate payment risk is extremely high'
            ]
          },
          {
            number: 9,
            icon: '📉',
            title: 'No KPI Tracking',
            description: 'Buying details remain unmeasured',
            bullets: ['No lead times or delays captured', 'No vendor quality scorecards', 'Unknown leakages in gold weight/rates', 'Decisions remain gut-based'],
            duration: 'None',
            output: 'Untracked Ops',
            trace: [
              '[SYS] Warning: Operational metrics disabled; no audit trail exists',
              '[SYS] Cannot track supplier lead time, returns, or order accuracy',
              '[SYS] System leakage audit: rates, weights, and wastage are untracked'
            ]
          }
        ]
      },
      inefficiencies: [
        {
          category: 'Operational Inefficiencies',
          items: [
            'No clear ownership: No PO owner/manager. Everyone can buy from anyone. No accountability.',
            'No standardized requirements: Salespeople\'s requirements are verbal, owner\'s hunch drives buying. No structured SKU data.',
            'No vendor master: Duplicate vendor records, no KYC, no supplier risk audits.',
            'No contracts or pricing rules: Rates agreed verbally, no fixed wastage, making charge, or stone rates.',
            'Manual/informal receiving: Goods received without system match. No GRN, wrong stock levels, high data entry errors.'
          ]
        },
        {
          category: 'Financial Inefficiencies',
          items: [
            'No price control: Overpaying due to hasty buying with no market price index or history comparisons.',
            'Duplicate or fake payments: No PO reference to match invoice. Risk of duplicate bill payments or paying for unreceived goods.',
            'No 3-way match: Invoice not matched to PO and GRN. Inaccurate stock counts and skewed gross margin figures.',
            'Poor cash flow management: Vendor payments executed without structured cycles, causing unexpected budget spikes.'
          ]
        },
        {
          category: 'Compliance & Audit Risks',
          items: [
            'No audit trail: Cannot prove what was bought, from whom, at what price, or what quality was verified.',
            'Tax & legal risks: Incomplete KYC on street dealers, VAT/GST input tax credit mismatches, penalties.',
            'Vendor disputes: Verbal agreements cause high frequency of weight and rate disputes with no written contracts.'
          ]
        },
        {
          category: 'Business Burden',
          items: [
            'Owner overloaded: Owner forced to negotiate, check trends, verify receipts, and approve payments manually.',
            'System operators overloaded: Backend operators recreate data from WhatsApp chats, phone logs, leading to high error rates.',
            'No growth path: As business scales, manual data entry chaos increases, blocking showroom expansion.',
            'No data-driven decisions: Cannot analyze supplier performance or design sell-through. Decisions stay 100% gut-based.'
          ]
        }
      ],
      comparison: [
        { aspect: 'Decision Basis', withPO: 'Formal requisition + structured analysis', withoutPO: 'Owner\'s gut/hunch + verbal counter feedback' },
        { aspect: 'Ownership', withPO: 'Clear roles: Procurement, Warehouse, QC, Finance', withoutPO: 'Owner overloaded; manual backend system operators' },
        { aspect: 'Vendor Management', withPO: 'Central vendor master, KYC audits, trade SLAs', withoutPO: 'No vendor master; random local dealers; no SLAs' },
        { aspect: 'Price Control', withPO: 'Fixed wastage, MC, stone rate agreements & 3-way match', withoutPO: 'Verbal prices per batch; no fixed rules; no 3-way match' },
        { aspect: 'Purchase Document', withPO: 'Official PO number created & signed in system', withoutPO: 'No PO; WhatsApp/oral agreement only' },
        { aspect: 'Receiving', withPO: 'System GRN, variance check, locker storage tracking', withoutPO: 'Informal count; no GRN; manual tray storage' },
        { aspect: 'QC', withPO: 'Phase-1 (vendor) + Phase-2 (assay QC), Pass/Fail logs', withoutPO: 'No formal QC; basic visual inspection only' },
        { aspect: 'Invoice Process', withPO: 'Automated 3-way match (PO vs GRN vs Invoice)', withoutPO: 'Invoice entered manually; no PO/GRN matching' },
        { aspect: 'Payment', withPO: 'System payment proposal & batch AP clearing', withoutPO: 'Direct NEFT/UPI or showroom cash drawer payout' },
        { aspect: 'SLA/KPI', withPO: 'Lead time, OTD, QC pass rate, and cycle time dashboards', withoutPO: 'No SLAs captured; no performance metrics' },
        { aspect: 'Audit Trail', withPO: 'PO, GRN, QC log, Invoice, and Payment fully linked', withoutPO: 'Weak trail; manual ledger journal postings only' },
        { aspect: 'Compliance Risk', withPO: 'Low risk: KYC & automated GST checks', withoutPO: 'High risk: tax mismatches, audit failure' },
        { aspect: 'Scalability', withPO: 'Highly scalable; supports multi-branch growth', withoutPO: 'Bottlenecks block growth; scaling brings chaos' }
      ]
    }
  },
  {
    id: 2,
    slug: 'o2c-retail-sales',
    name: 'Order-to-Cash (O2C)',
    category: 'Retail Sales Pipeline',
    description: 'Tokenized sale booking from customer walk-in to cash reconciliation',
    icon: '🛍️',
    metrics: ['Tokenized sale booking', '~ 64% walkout conversion', 'Real-time sync'],
    steps: [
      { number: 1, icon: '👤', title: 'Customer Walk-in', description: 'CRM capture + need analysis', bullets: ['Walk-in logging', 'Purchase intent tagging', 'Salesperson assignment', 'Estimated value capture'], duration: '5 min', output: 'Qualified lead' },
      { number: 2, icon: '💍', title: 'Product Selection', description: 'Catalogue browsing with live rates', bullets: ['Live MCX pricing display', 'Design / purity filter', 'Availability check', 'Alternatives suggestion'], duration: '15 min', output: 'Shortlisted items' },
      { number: 3, icon: '📝', title: 'Token Generation', description: 'Unique token per transaction', bullets: ['Auto-token ID generation', 'Weight / rate snapshot', 'Customer KYC linking', 'Scheme eligibility check'], duration: '3 min', output: 'Active token' },
      { number: 4, icon: '💰', title: 'Pricing & Discount', description: 'Dynamic pricing with margin guardrails', bullets: ['Live rate + making charges', 'Discount approval matrix', 'Margin threshold check', 'Scheme integration'], duration: '5 min', output: 'Locked price' },
      { number: 5, icon: '✅', title: 'Order Confirmation', description: 'Digital order with payment terms', bullets: ['Digital signature capture', 'Payment schedule config', 'Delivery timeline', 'Order acknowledgement'], duration: '5 min', output: 'Confirmed order' },
      { number: 6, icon: '💵', title: 'Payment Collection', description: 'Multi-mode payment processing', bullets: ['Cash / card / UPI', 'Gold scheme redemption', 'EMI integration', 'Receipt generation'], duration: '5 min', output: 'Payment received' },
      { number: 7, icon: '📈', title: 'Reconciliation', description: 'Daily sales reconciliation', bullets: ['Token → sale matching', 'Cash drawer reconciliation', 'CRM + ERP sync', 'Daily sales report'], duration: 'Daily 30 min', output: 'Reconciled sales' },
    ],
  },
  {
    id: 3,
    slug: 'inventory-management',
    name: 'Inventory Management',
    category: 'Karat-wise reconciliation',
    description: 'Real-time inventory tracking with karat-wise reconciliation and token-based auditing',
    icon: '📊',
    metrics: ['Instant audits', 'Karat-wise tracking', 'Token-based control'],
    steps: [
      { number: 1, icon: '🏷️', title: 'Item Tagging', description: 'Unique ID per jewellery piece', bullets: ['Barcode / RFID tagging', 'Karat / weight / design entry', 'Initial stock entry', 'Category classification'], duration: '2 min/item', output: 'Tagged inventory' },
      { number: 2, icon: '📥', title: 'Stock Inward', description: 'Receive and verify new stock', bullets: ['GRN generation', 'Weight verification', 'Quality check', 'Storage location assign'], duration: '15 min/batch', output: 'Verified stock' },
      { number: 3, icon: '🔄', title: 'Stock Movement', description: 'Track inter-store transfers', bullets: ['Transfer request', 'Approval workflow', 'Transit tracking', 'Receiving confirmation'], duration: 'Varies', output: 'Transferred stock' },
      { number: 4, icon: '🔢', title: 'Physical Count', description: 'Cycle counting with token matching', bullets: ['Zone-wise counting', 'Token reconciliation', 'Variance detection', 'Audit trail'], duration: 'Daily 1 hr', output: 'Count report' },
      { number: 5, icon: '⚖️', title: 'Karat Reconciliation', description: 'Gold purity-wise balance', bullets: ['24K / 22K / 18K buckets', 'Weight reconciliation', 'Purity verification', 'Adjustment posting'], duration: 'Weekly 2 hr', output: 'Karat balance' },
      { number: 6, icon: '🚨', title: 'Discrepancy Handling', description: 'Resolve inventory mismatches', bullets: ['Variance analysis', 'Root cause identification', 'Correction posting', 'Prevention measure'], duration: 'As needed', output: 'Resolved variance' },
      { number: 7, icon: '📋', title: 'Reporting', description: 'Real-time inventory dashboards', bullets: ['Stock position by store', 'Karat-wise valuation', 'Ageing analysis', 'Reorder alerts'], duration: 'Real-time', output: 'Live dashboard' },
    ],
  },
  {
    id: 4,
    slug: 'commodity-costing-engine',
    name: 'Commodity Costing Engine',
    category: 'Live MCX integration',
    description: 'Automated gold pricing with 15-minute MCX refresh and multi-purity costing',
    icon: '📈',
    metrics: ['15-min COGS refresh', 'Multi-purity costing', 'Zero manual override'],
    steps: [
      { number: 1, icon: '📡', title: 'MCX Rate Fetch', description: 'Live MCX gold price ingestion', bullets: ['15-min interval API call', 'Rate validation', 'Historical comparison', 'Alert on anomaly'], duration: 'Auto', output: 'Live MCX rate' },
      { number: 2, icon: '🔢', title: 'Purity Conversion', description: 'Convert to store purity levels', bullets: ['24K → 22K / 18K formula', 'Wastage factor apply', 'Making charges config', 'Purity premium calc'], duration: 'Auto', output: 'Purity-wise rates' },
      { number: 3, icon: '💰', title: 'COGS Calculation', description: 'Real-time cost of goods sold', bullets: ['Raw material cost', 'Labour / making charges', 'Overhead allocation', 'Margin calculation'], duration: 'Auto', output: 'Live COGS' },
      { number: 4, icon: '📋', title: 'Price List Update', description: 'Auto-publish to POS', bullets: ['Category-wise pricing', 'Store-specific overrides', 'Promotional pricing', 'Customer display update'], duration: 'Auto', output: 'Updated price list' },
      { number: 5, icon: '⚠️', title: 'Margin Monitoring', description: 'Real-time margin alerts', bullets: ['Threshold config', 'Alert on margin drop', 'Approval workflow', 'Escalation matrix'], duration: 'Real-time', output: 'Margin alerts' },
      { number: 6, icon: '📊', title: 'Variance Analysis', description: 'Planned vs actual costing', bullets: ['Standard vs actual', 'Variance breakdown', 'Trend analysis', 'Corrective action'], duration: 'Weekly', output: 'Variance report' },
      { number: 7, icon: '🔄', title: 'Audit Trail', description: 'Complete rate change history', bullets: ['Rate change log', 'Approver tracking', 'Impact analysis', 'Compliance report'], duration: 'Always on', output: 'Audit trail' },
    ],
  },
  {
    id: 5,
    slug: 'crm-growth-engine',
    name: 'CRM Growth Engine',
    category: 'Zithara loyalty engine',
    description: 'Unified customer journey management with 64% walkout-to-sale conversion',
    icon: '❤️',
    metrics: ['64% walkout conversion', 'Zithara CRM', 'Unified buyer journey'],
    steps: [
      { number: 1, icon: '👤', title: 'Customer Capture', description: 'Walk-in and lead capture', bullets: ['Walk-in logging', 'Contact capture', 'Interest tagging', 'Source tracking'], duration: '2 min', output: 'CRM entry' },
      { number: 2, icon: '🎯', title: 'Lead Scoring', description: 'AI-powered lead qualification', bullets: ['Purchase intent score', 'Budget estimation', 'Timeline prediction', 'Priority ranking'], duration: 'Auto', output: 'Scored lead' },
      { number: 3, icon: '💬', title: 'Follow-up Automation', description: 'Multi-channel nurturing', bullets: ['WhatsApp campaigns', 'SMS reminders', 'Call scheduling', 'Personalized offers'], duration: 'Ongoing', output: 'Engaged lead' },
      { number: 4, icon: '🏪', title: 'Store Visit', description: 'Appointment and visit tracking', bullets: ['Appointment booking', 'Salesperson prep', 'Visit logging', 'Feedback capture'], duration: 'Varies', output: 'Visit completed' },
      { number: 5, icon: '🎁', title: 'Offer Conversion', description: 'Targeted offer delivery', bullets: ['Personalized offer', 'Scheme presentation', 'Competitive comparison', 'Urgency creation'], duration: '10 min', output: 'Offer presented' },
      { number: 6, icon: '✅', title: 'Sale Closure', description: 'Final conversion tracking', bullets: ['Token generation', 'Pricing lock', 'Payment terms', 'Delivery schedule'], duration: '5 min', output: 'Sale closed' },
      { number: 7, icon: '📈', title: 'Retention', description: 'Post-sale engagement', bullets: ['Thank you message', 'Referral request', 'Repeat purchase nudge', 'Loyalty program'], duration: 'Ongoing', output: 'Loyal customer' },
    ],
  },
  {
    id: 6,
    slug: 'loss-leakage-detection',
    name: 'Loss & Leakage Detection',
    category: 'Invisible profit recovery',
    description: 'AI-powered detection of profit leakages across procurement, inventory, and sales',
    icon: '🔎',
    metrics: ['Leakage identified', 'ML detection stack', '90-day recovery'],
    steps: [
      { number: 1, icon: '📊', title: 'Data Collection', description: 'Aggregate transaction data', bullets: ['ERP data extraction', 'CRM sync', 'Finance records', 'External feeds'], duration: 'Auto', output: 'Unified dataset' },
      { number: 2, icon: '🔍', title: 'Pattern Analysis', description: 'ML-based anomaly detection', bullets: ['Statistical modelling', 'Historical comparison', 'Peer benchmarking', 'Trend analysis'], duration: 'Auto', output: 'Anomaly flags' },
      { number: 3, icon: '⚠️', title: 'Leakage Identification', description: 'Categorize leakages', bullets: ['Rate leakage', 'Weight discrepancy', 'Process gap', 'Fraud pattern'], duration: 'Auto', output: 'Leakage report' },
      { number: 4, icon: '💰', title: 'Impact Quantification', description: 'Calculate financial impact', bullets: ['Per-incident value', 'Aggregated loss', 'Trend projection', 'Root cause'], duration: 'Auto', output: '₹ impact' },
      { number: 5, icon: '🔧', title: 'Remediation', description: 'Fix and prevent', bullets: ['Process fix', 'System config', 'Approval matrix', 'Alert setup'], duration: 'Varies', output: 'Fixed process' },
      { number: 6, icon: '👁️', title: 'Monitoring', description: 'Continuous surveillance', bullets: ['Real-time alerts', 'Dashboard monitoring', 'Escalation rules', 'Periodic review'], duration: 'Always on', output: 'Monitored ops' },
      { number: 7, icon: '📈', title: 'Reporting', description: 'Recovery tracking', bullets: ['Recovery amount', 'Prevention value', 'ROI calculation', 'Executive dashboard'], duration: 'Monthly', output: 'Recovery report' },
    ],
  },
  {
    id: 7,
    slug: 'erp-crm-finance-integration',
    name: 'ERP–CRM–Finance Integration',
    category: 'Single revenue engine',
    description: 'Unified data flow between Synergics ERP, Zithara CRM, and finance systems',
    icon: '🔗',
    metrics: ['One source of truth', 'Real-time sync', 'Unified reporting'],
    steps: [
      { number: 1, icon: '🗺️', title: 'System Mapping', description: 'Identify integration points', bullets: ['Data flow diagram', 'API inventory', 'Sync frequency', 'Error handling'], duration: '1 week', output: 'Integration map' },
      { number: 2, icon: '🔌', title: 'API Connection', description: 'Build data connectors', bullets: ['ERP API', 'CRM API', 'Finance API', 'Middleware setup'], duration: '2 weeks', output: 'Connected APIs' },
      { number: 3, icon: '🔄', title: 'Data Sync', description: 'Real-time data exchange', bullets: ['Bidirectional sync', 'Conflict resolution', 'Queue management', 'Retry logic'], duration: 'Ongoing', output: 'Synced data' },
      { number: 4, icon: '🧹', title: 'Data Cleansing', description: 'Standardize and deduplicate', bullets: ['Deduplication', 'Format standardization', 'Validation rules', 'Master data mgmt'], duration: '1 week', output: 'Clean data' },
      { number: 5, icon: '🔐', title: 'Security', description: 'Access control and audit', bullets: ['Role-based access', 'Encryption', 'Audit logging', 'Compliance check'], duration: 'Ongoing', output: 'Secure flow' },
      { number: 6, icon: '📊', title: 'Unified Dashboard', description: 'Single pane of glass', bullets: ['Cross-system KPIs', 'Drill-down reports', 'Alert consolidation', 'Mobile access'], duration: '2 weeks', output: 'Live dashboard' },
      { number: 7, icon: '🧪', title: 'Testing', description: 'End-to-end validation', bullets: ['Unit testing', 'Integration testing', 'UAT', 'Go-live'], duration: '1 week', output: 'Validated system' },
    ],
  },
  {
    id: 8,
    slug: 'mcx-pricing-automation',
    name: 'MCX Pricing Automation',
    category: 'Live gold rate engine',
    description: 'Fully automated gold pricing with live MCX rates and zero manual intervention',
    icon: '💱',
    metrics: ['Zero manual override', 'Live rates', 'Multi-store sync'],
    steps: [
      { number: 1, icon: '📡', title: 'Rate Ingestion', description: 'MCX API integration', bullets: ['MCX API connect', 'Rate validation', 'Backup source', 'Frequency config'], duration: 'Auto', output: 'Live rate feed' },
      { number: 2, icon: '⚙️', title: 'Rule Engine', description: 'Pricing rule configuration', bullets: ['Markup rules', 'Purity formulas', 'Store-specific rules', 'Promotional rules'], duration: '1-time', output: 'Rule set' },
      { number: 3, icon: '🔢', title: 'Price Calculation', description: 'Automated price computation', bullets: ['Base rate + markup', 'Purity adjustment', 'Making charges', 'Tax calculation'], duration: 'Auto', output: 'Calculated prices' },
      { number: 4, icon: '✅', title: 'Approval Matrix', description: 'Exception approval', bullets: ['Threshold config', 'Auto-approval', 'Escalation rules', 'Override logging'], duration: 'As needed', output: 'Approved prices' },
      { number: 5, icon: '📤', title: 'Price Publish', description: 'Distribute to all channels', bullets: ['POS update', 'Online sync', 'Display boards', 'Customer app'], duration: 'Auto', output: 'Published prices' },
      { number: 6, icon: '📈', title: 'Monitoring', description: 'Track price effectiveness', bullets: ['Competitor tracking', 'Margin analysis', 'Customer response', 'Volume impact'], duration: 'Daily', output: 'Price insights' },
      { number: 7, icon: '📝', title: 'Audit', description: 'Complete pricing history', bullets: ['Change log', 'Approver trail', 'Impact analysis', 'Compliance report'], duration: 'Always on', output: 'Audit trail' },
    ],
  },
  {
    id: 9,
    slug: 'scheme-gold-saving',
    name: 'Gold Saving Schemes',
    category: 'Liability + maturity engine',
    description: 'Complete gold saving scheme management with compliant accounting and maturity processing',
    icon: '🎁',
    metrics: ['Compliant accounting', 'Auto-maturity', 'Liability tracking'],
    steps: [
      { number: 1, icon: '👤', title: 'Enrolment', description: 'Customer scheme registration', bullets: ['KYC collection', 'Scheme selection', 'Monthly amount', 'Tenure setup'], duration: '10 min', output: 'Enrolled customer' },
      { number: 2, icon: '💰', title: 'Monthly Collection', description: 'Automated payment collection', bullets: ['Auto-debit setup', 'Payment reminder', 'Collection tracking', 'Missed payment handling'], duration: 'Monthly', output: 'Collected payment' },
      { number: 3, icon: '📊', title: 'Liability Tracking', description: 'Real-time liability position', bullets: ['Principal tracking', 'Gold gram accumulation', 'Rate lock tracking', 'Milestone alerts'], duration: 'Real-time', output: 'Liability report' },
      { number: 4, icon: '🏷️', title: 'Rate Lock', description: 'Gold rate fixation', bullets: ['Lock-in rate', 'Gram credit', 'Rate comparison', 'Best rate benefit'], duration: 'Auto', output: 'Locked rate' },
      { number: 5, icon: '🎉', title: 'Maturity Processing', description: 'End-of-tenure conversion', bullets: ['Maturity alert', 'Gram calculation', 'Bonus application', 'Redemption options'], duration: 'Auto', output: 'Matured scheme' },
      { number: 6, icon: '📋', title: 'Redemption', description: 'Gold or cash redemption', bullets: ['Jewellery purchase', 'Cash withdrawal', 'Partial redemption', 'Transfer option'], duration: '15 min', output: 'Redeemed' },
      { number: 7, icon: '📈', title: 'Accounting', description: 'Compliant financial reporting', bullets: ['Liability recognition', 'Revenue deferral', 'GST compliance', 'Audit trail'], duration: 'Monthly', output: 'Compliant books' },
    ],
  },
  {
    id: 10,
    slug: 'store-operations-sop',
    name: 'Store Operations SOP',
    category: 'Day-1 to Day-N playbook',
    description: 'Standardized operating procedures deployed across 200+ stores',
    icon: '🏪',
    metrics: ['200+ stores rolled out', 'Day-1 readiness', 'SOP compliance'],
    steps: [
      { number: 1, icon: '📋', title: 'SOP Design', description: 'Process documentation', bullets: ['Process mapping', 'Role definition', 'Checklist creation', 'Template design'], duration: '2 weeks', output: 'SOP document' },
      { number: 2, icon: '👥', title: 'Staff Training', description: 'Comprehensive training program', bullets: ['Classroom training', 'Hands-on practice', 'Assessment', 'Certification'], duration: '1 week', output: 'Trained staff' },
      { number: 3, icon: '🖥️', title: 'System Setup', description: 'Store system configuration', bullets: ['ERP config', 'POS setup', 'User creation', 'Access rights'], duration: '3 days', output: 'Ready system' },
      { number: 4, icon: '📦', title: 'Stock Loading', description: 'Initial inventory setup', bullets: ['Stock receipt', 'Tagging', 'System entry', 'Verification'], duration: '2 days', output: 'Loaded inventory' },
      { number: 5, icon: '🎯', title: 'Soft Launch', description: 'Pilot operations', bullets: ['Limited operations', 'Issue tracking', 'Quick fixes', 'Feedback collection'], duration: '1 week', output: 'Stable ops' },
      { number: 6, icon: '🚀', title: 'Go-Live', description: 'Full operations start', bullets: ['All processes live', 'Support available', 'Monitoring active', 'Issue resolution'], duration: '1 day', output: 'Live store' },
      { number: 7, icon: '📈', title: 'Continuous Improvement', description: 'Ongoing optimization', bullets: ['Performance review', 'Feedback analysis', 'SOP updates', 'Best practice sharing'], duration: 'Ongoing', output: 'Optimized ops' },
    ],
  },
  {
    id: 11,
    slug: 'old-gold-exchange',
    name: 'Old Gold Exchange',
    category: 'Trust-led valuation',
    description: 'Transparent and trustworthy old gold buyback process with fair valuation',
    icon: '♻️',
    metrics: ['Transparent buyback', 'Fair valuation', 'Trust engine'],
    steps: [
      { number: 1, icon: '👤', title: 'Customer Request', description: 'Exchange request capture', bullets: ['Item description', 'Weight estimate', 'Purity claim', 'Photo capture'], duration: '5 min', output: 'Exchange request' },
      { number: 2, icon: '⚖️', title: 'Weight Verification', description: 'Accurate weight measurement', bullets: ['Digital weighing', 'Customer witness', 'Photo evidence', 'Weight record'], duration: '2 min', output: 'Verified weight' },
      { number: 3, icon: '🔬', title: 'Purity Testing', description: 'Karatometer / acid test', bullets: ['Non-destructive test', 'Purity certificate', 'Customer approval', 'Photo evidence'], duration: '3 min', output: 'Tested purity' },
      { number: 4, icon: '💰', title: 'Rate Application', description: 'Live rate for old gold', bullets: ['Live MCX rate', 'Purity adjustment', 'Deduction transparency', 'Value calculation'], duration: '2 min', output: 'Calculated value' },
      { number: 5, icon: '🤝', title: 'Customer Approval', description: 'Transparent offer presentation', bullets: ['Rate breakdown', 'Comparison', 'No pressure', 'Digital consent'], duration: '5 min', output: 'Customer approval' },
      { number: 6, icon: '📝', title: 'Documentation', description: 'Complete audit trail', bullets: ['KYC verification', 'Item photos', 'Test results', 'Signed acknowledgement'], duration: '5 min', output: 'Complete docs' },
      { number: 7, icon: '✅', title: 'Payment', description: 'Instant payment processing', bullets: ['Payment mode selection', 'Instant transfer', 'Receipt generation', 'Customer feedback'], duration: '2 min', output: 'Paid customer' },
    ],
  },
  {
    id: 12,
    slug: 'compliance-audit',
    name: 'Compliance & Audit',
    category: 'GST / BIS / AML',
    description: 'Audit-proof operations with GST, BIS hallmarking, and AML compliance',
    icon: '🛡️',
    metrics: ['Audit-proof operations', 'GST compliant', 'BIS ready'],
    steps: [
      { number: 1, icon: '📋', title: 'Compliance Mapping', description: 'Identify applicable regulations', bullets: ['GST requirements', 'BIS hallmarking', 'AML norms', 'State-specific rules'], duration: '1 week', output: 'Compliance map' },
      { number: 2, icon: '⚙️', title: 'Process Design', description: 'Compliance-embedded processes', bullets: ['HUID tagging', 'GST invoicing', 'KYC process', 'Record keeping'], duration: '2 weeks', output: 'Compliant processes' },
      { number: 3, icon: '🖥️', title: 'System Config', description: 'ERP compliance settings', bullets: ['GST rates', 'HUID field', 'KYC fields', 'Audit trail'], duration: '3 days', output: 'Configured system' },
      { number: 4, icon: '👥', title: 'Team Training', description: 'Compliance awareness', bullets: ['Regulation overview', 'Process training', 'Documentation', 'Assessment'], duration: '2 days', output: 'Aware team' },
      { number: 5, icon: '🔍', title: 'Internal Audit', description: 'Self-assessment', bullets: ['Checklist review', 'Sample testing', 'Gap identification', 'Corrective action'], duration: 'Weekly', output: 'Audit report' },
      { number: 6, icon: '📝', title: 'Documentation', description: 'Complete record keeping', bullets: ['Invoice archive', 'KYC records', 'HUID logs', 'Audit trail'], duration: 'Ongoing', output: 'Complete records' },
      { number: 7, icon: '🎯', title: 'External Audit', description: 'Third-party audit readiness', bullets: ['Audit preparation', 'Document compilation', 'Auditor coordination', 'Closure report'], duration: 'As needed', output: 'Audit cleared' },
    ],
  },
];

export function getWorkflowBySlug(slug: string): Workflow | undefined {
  return workflows.find((w) => w.slug === slug);
}
