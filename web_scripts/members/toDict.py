import json
with open("members.txt", 'r') as outfile:
    allMembers = outfile.readlines()
    memberList = []
    for s in allMembers:
        new = {}
        text = s.split("\n")[0].split()

        new["kerberos"] = text[0]
        new["part"] = text[-1]
        new["name"] = ' '.join(text[1:-1])
        memberList.append(new)

with open("members.json", "w") as outfile:
    json.dump(memberList, outfile)
