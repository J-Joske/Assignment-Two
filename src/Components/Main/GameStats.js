import React from 'react';

const GameStatsData = [
{date:"Sunday, 5th May 2024", teams:"Richmond V Fremantle", score:"49 - 103", winlosedraw:"Lose"},
{date:"Wednesday, 24th April 2024",teams:"Richmond V Melbourne", score:"42 - 85", winlosedraw:"Lose"},
{date:"Sunday, 14th April 2024", teams:"Richmond V West Coast", score:"70 - 109", winlosedraw:"Lose"},
{date:"Sunday, 7th April 2024", teams:"Richmond V St Kilda", score:"60 - 67", winlosedraw:"Lose"},
{date:"Sunday, 31st March 2024", teams:"Richmond V Port Adelaide", score:"92 - 122", winlosedraw:"Lose"},
{date:"Sunday, 24th March 2024", teams:"Richmond V Sydney", score:"82 - 77", winlosedraw:"Win"},
]

function GameStats () {
    return (
        <div>
            <h2>GAME STATS</h2>
        <div className="GameStatsTable">
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Teams</th>
                    <th>Score</th>
                    <th>Win/Lose/Draw</th>
                </tr>
                </thead>
                <tbody>
                {GameStatsData.map((val, key) => {
                    return(
                        <tr key={key}>
                            <td>{val.date}</td>
                            <td>{val.teams}</td>
                            <td>{val.score}</td>
                            <td>{val.winlosedraw}</td>
                        </tr>
                    )
                }
                )}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default GameStats;