function TrainingStats() {
  return (
    <div className="settings-panel-section">
      <div>
        <h3 className="setting-panel-section-heading">
          My Training Achievement
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-2 capitalize.5 sm:gap-5">
        <div className="bg-gray-100 rounded-md p-1 sm:p-2 flex flex-col items-center gap-1">
          <h4 className="text-sm text-gray-700 font-semibold">11 Class</h4>
          <span className="text-xs text-secondary font-medium">My Class</span>
        </div>
        <div className="bg-gray-100 rounded-md p-1 sm:p-2 flex flex-col items-center gap-1">
          <h4 className="text-sm text-gray-700 font-semibold">11 Class</h4>
          <span className="text-xs text-secondary font-medium">Calories</span>
        </div>
        <div className="bg-gray-100 rounded-md p-1 sm:p-2 flex flex-col items-center gap-1">
          <h4 className="text-sm text-gray-700 font-semibold">11 Class</h4>
          <span className="text-xs text-secondary font-medium">Goal</span>
        </div>
      </div>
    </div>
  );
}

export default TrainingStats;
