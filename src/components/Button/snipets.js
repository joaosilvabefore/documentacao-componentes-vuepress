async updateLike(event) {
    this.data.like_flag = this.data.like_flag ? null : true;
    await this.likeLesson({
        courseCode: this.courseCode,
        lessonCode: this.lessonCode,
        data: this.data
    });
},
async updateDislike(event) {
    this.data.like_flag = this.data.like_flag === false ? null : false;
    await this.likeLesson({
        courseCode: this.courseCode,
        lessonCode: this.lessonCode,
        data: this.data
    });
},