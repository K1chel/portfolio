/* eslint-disable react/prop-types */

const MobileSkillCard = ({ skill }) => {
  const { image, label } = skill;

  return (
    <div className="shrink-0 w-20 h-20 rounded-lg overflow-hidden relative p-2 bg-gradient-to-b from-zinc-700 to-zinc-900 my-8">
      <img src={image} alt={label} className="w-full h-full object-contain" />
    </div>
  );
};

export default MobileSkillCard;
