'use client';

import { MessageSquare, Code, FileText } from 'lucide-react';
import { Scene } from '@/data/models';

interface SceneSelectorProps {
  selected: string;
  onChange: (scene: string) => void;
  scenes: Record<string, Scene>;
}

const sceneIcons: Record<string, React.ReactNode> = {
  general: <MessageSquare className="w-6 h-6" />,
  code: <Code className="w-6 h-6" />,
  longtext: <FileText className="w-6 h-6" />,
};

export function SceneSelector({ selected, onChange, scenes }: SceneSelectorProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">🎯</span>
        <h2 className="font-semibold text-gray-900">选择场景类型</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.entries(scenes).map(([key, scene]) => (
          <label key={key} className="cursor-pointer">
            <input
              type="radio"
              name="scene"
              value={key}
              checked={selected === key}
              onChange={() => onChange(key)}
              className="hidden peer"
            />
            <div className="border-2 border-gray-200 rounded-xl p-4 text-center 
                          hover:border-indigo-300 peer-checked:border-indigo-500 
                          peer-checked:bg-indigo-50 transition-all">
              <div className="text-indigo-600 mb-2 flex justify-center">
                {sceneIcons[key]}
              </div>
              <div className="font-medium text-gray-900">{scene.name}</div>
              <div className="text-xs text-gray-500 mt-1">{scene.description}</div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
