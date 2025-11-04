from turtle import Turtle
ALIGNMENT = 'center'
FONT = ('Arial', 18, 'bold')


class Scoreboard(Turtle):
    def __init__(self):
        super().__init__()
        self.penup()
        # self.hideturtle()
        self.goto(0,270)
        self.hideturtle()
        self.score = 0
        self.color("white")
        self.write_score()


    def write_score(self):
        self.write(f"Score: {self.score}", align=ALIGNMENT, font=FONT)

    def update_score(self):
            self.score += 1
            self.clear()
            self.write_score()

    def game_over(self):
        self.goto(0,0)
        self.write("Game Over.", align=ALIGNMENT, font=FONT)
