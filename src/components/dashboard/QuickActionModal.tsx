import React from 'react';
import { 
  X, 
  Users, 
  FileCheck, 
  RefreshCw, 
  Calculator, 
  FileSpreadsheet, 
  Calendar,
  ArrowRight
} from 'lucide-react';
import { DashboardTab } from './Sidebar';

interface QuickActionModalProps {
  onClose: () => void;
  onSelectAction: (tab: DashboardTab) => void;
}

export const QuickActionModal: React.FC<QuickActionModalProps> = ({
  onClose,
  onSelectAction
}) => {
  const actions = [
    {
      tab: 'clients' as DashboardTab,
      title: 'Add New Client Profile',
      desc: 'Register PAN, GSTIN, TAN & assign CA team member',
      icon: Users,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      tab: 'reconciliation' as DashboardTab,
      title: 'Run GSTR-2B Auto-Reconciliation',
      desc: 'Cross-match purchase register invoices vs portal 2B data',
      icon: RefreshCw,
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      tab: 'gst' as DashboardTab,
      title: 'Prepare GSTR-3B / GSTR-1 Return',
      desc: 'Verify tax computations and generate ARN upload file',
      icon: FileCheck,
      color: 'bg-amber-50 text-amber-600'
    },
    {
      tab: 'itr' as DashboardTab,
      title: 'Income Tax Return Computation',
      desc: 'ITR-1 through ITR-6 with Old vs New regime optimizer',
      icon: Calculator,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      tab: 'tds' as DashboardTab,
      title: 'Generate TDS Form 16 / 16A',
      desc: 'Download digitally signed certificates from TRACES',
      icon: FileSpreadsheet,
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      tab: 'calendar' as DashboardTab,
      title: 'Schedule Statutory Milestone',
      desc: 'Set custom client deadline & automated reminders',
      icon: Calendar,
      color: 'bg-rose-50 text-rose-600'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-xl max-w-lg w-full p-6">
        
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Quick Compliance Action</h3>
            <p className="text-xs text-slate-500">Select a workflow to launch immediately</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {actions.map((act, idx) => {
            const Icon = act.icon;
            return (
              <div
                key={idx}
                onClick={() => {
                  onSelectAction(act.tab);
                  onClose();
                }}
                className="p-3 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/40 transition-all cursor-pointer group flex items-start gap-2.5"
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${act.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors flex items-center gap-1">
                    <span>{act.title}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">
                    {act.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
