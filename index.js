// code your solution here
function superbowlWin(record)
{
    const firstWinningYear=record.find((e)=> e.result==="W")
    return (firstWinningYear ? firstWinningYear.year : undefined)
}


