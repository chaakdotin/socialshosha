import matplotlib.pyplot as plt
import matplotlib.patches as patches

# Create a new figure with equal aspect ratio
fig, ax = plt.subplots(figsize=(6,6))

# Draw the head (a yellow circle)
head = patches.Circle((0.5, 0.5), 0.4, facecolor='yellow', edgecolor='black', linewidth=2)
ax.add_patch(head)

# Draw the left eye (white circle with black pupil)
left_eye = patches.Circle((0.35, 0.6), 0.05, facecolor='white', edgecolor='black', linewidth=1)
ax.add_patch(left_eye)
left_pupil = patches.Circle((0.35, 0.6), 0.02, facecolor='black')
ax.add_patch(left_pupil)

# Draw the right eye (white circle with black pupil)
right_eye = patches.Circle((0.65, 0.6), 0.05, facecolor='white', edgecolor='black', linewidth=1)
ax.add_patch(right_eye)
right_pupil = patches.Circle((0.65, 0.6), 0.02, facecolor='black')
ax.add_patch(right_pupil)

# Draw the smile (an arc)
smile = patches.Arc((0.5, 0.5), 0.3, 0.2, theta1=200, theta2=340, edgecolor='black', linewidth=2)
ax.add_patch(smile)

# Add blush on the cheeks (small pink circles)
left_cheek = patches.Circle((0.28, 0.5), 0.03, facecolor='pink', edgecolor='none')
ax.add_patch(left_cheek)
right_cheek = patches.Circle((0.72, 0.5), 0.03, facecolor='pink', edgecolor='none')
ax.add_patch(right_cheek)

# Remove axes for a cleaner look
ax.set_xlim(0, 1)
ax.set_ylim(0, 1)
ax.set_aspect('equal')
ax.axis('off')

plt.show()