from git import Repo

working_tree_dir = '/Users/louiseparry/Desktop/jokes/backend/autoJokesAdd'
file = "autoJokeAdd/test.txt"
repo = Repo(working_tree_dir)


def gitActivities(repo):
    if len(repo.untracked_files):
        repo.git.add(A=True)
        repo.git.commit('-m', 'initial commit')


def alterFile(file):
    with open(file, "a") as f:
        f.write("new line\n")


alterFile(file)


gitActivities(repo)