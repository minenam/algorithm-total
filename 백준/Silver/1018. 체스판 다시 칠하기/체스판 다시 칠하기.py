N, M = map(int, input().split()) 

board = [input() for _ in range(N)]

chess1 = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW"
]

chess2 = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB"
]


def count_repaints(sub_board, pattern):
    repaints = 0
    for i in range(8):
        for j in range(8):
            if sub_board[i][j] != pattern[i][j]:
                repaints += 1
    return repaints

min_repaints = float('inf')

for i in range(N - 7):
    for j in range(M - 7):
        sub_board = [row[j:j+8] for row in board[i:i+8]]
        repaints1 = count_repaints(sub_board, chess1)
        repaints2 = count_repaints(sub_board, chess2)
        min_repaints = min(min_repaints, repaints1, repaints2)

print(min_repaints)
