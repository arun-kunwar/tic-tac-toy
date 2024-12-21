

function Sq({value,sqclick}) {
  

  return (
    <button
      className="w-20 h-20 border border-black text-lg font-bold flex items-center justify-center"
      onClick={sqclick}
    >
      {value}
    </button>
  );
}

export default Sq;
