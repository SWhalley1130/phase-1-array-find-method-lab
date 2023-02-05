// code your solution here
function superbowlWin(record)
{
    const firstWinningYear=record.find((e)=> e.result==="W")
    if (!firstWinningYear)
    {
        return undefined;
    }
    else 
    {
        return firstWinningYear.year;
    }
}
