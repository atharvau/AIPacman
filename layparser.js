var maze = (maze = [
  [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ],
  [
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1
  ],
  [
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1
  ],
  [
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1
  ],
  [
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    1
  ],
  [
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1
  ],
  [
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1
  ],
  [
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1
  ],
  [
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1
  ],
  [
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1
  ],
  [
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1
  ],
  [
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1
  ],
  [
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1
  ],
  [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ]
]);
maze = transpose(maze);
var foo = [
  [3, 3],
  [4, 3],
  [5, 3],
  [6, 3],
  [7, 3],
  [8, 3],
  [9, 3],
  [10, 3],
  [11, 3],
  [19, 3],
  [20, 3],
  [21, 3],
  [22, 3],
  [23, 3],
  [24, 3],
  [25, 3],
  [26, 3],
  [27, 3],
  [28, 3],
  [29, 3],
  [30, 3],
  [31, 3],
  [32, 3],
  [3, 4],
  [4, 4],
  [5, 4],
  [6, 4],
  [7, 4],
  [8, 4],
  [9, 4],
  [10, 4],
  [14, 4],
  [23, 4],
  [30, 4],
  [6, 5],
  [14, 5],
  [15, 5],
  [16, 5],
  [19, 5],
  [21, 5],
  [22, 5],
  [23, 5],
  [24, 5],
  [25, 5],
  [29, 5],
  [30, 5],
  [31, 5],
  [32, 5],
  [3, 6],
  [4, 6],
  [5, 6],
  [6, 6],
  [12, 6],
  [16, 6],
  [19, 6],
  [20, 6],
  [21, 6],
  [22, 6],
  [23, 6],
  [24, 6],
  [25, 6],
  [29, 6],
  [30, 6],
  [31, 6],
  [32, 6],
  [3, 7],
  [4, 7],
  [5, 7],
  [6, 7],
  [10, 7],
  [11, 7],
  [12, 7],
  [13, 7],
  [14, 7],
  [15, 7],
  [16, 7],
  [19, 7],
  [23, 7],
  [29, 7],
  [30, 7],
  [31, 7],
  [32, 7],
  [3, 8],
  [4, 8],
  [5, 8],
  [6, 8],
  [10, 8],
  [11, 8],
  [12, 8],
  [13, 8],
  [14, 8],
  [16, 8],
  [19, 8],
  [20, 8],
  [21, 8],
  [29, 8],
  [12, 9],
  [21, 9],
  [25, 9],
  [26, 9],
  [27, 9],
  [28, 9],
  [29, 9],
  [30, 9],
  [31, 9],
  [32, 9],
  [3, 10],
  [4, 10],
  [5, 10],
  [6, 10],
  [7, 10],
  [8, 10],
  [9, 10],
  [10, 10],
  [11, 10],
  [12, 10],
  [13, 10],
  [14, 10],
  [15, 10],
  [16, 10],
  [24, 10],
  [25, 10],
  [26, 10],
  [27, 10],
  [28, 10],
  [29, 10],
  [30, 10],
  [31, 10],
  [32, 10]
];